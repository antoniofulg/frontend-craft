#!/usr/bin/env python3
"""Check every skill's portable file contract; installer discovery validates YAML."""

from importlib.util import module_from_spec, spec_from_file_location
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
SKILLS = ROOT / "skills"
SHARED = ROOT / "shared"
# Helper scripts a skill must ship, keyed by skill name.
REQUIRED_SCRIPTS = {
    "frontend-craft": ["scripts/check-contrast.mjs", "scripts/detect-token-drift.mjs"],
}


def load_sync():
    # `python3 -I` drops the script directory from sys.path, so load by path.
    spec = spec_from_file_location("sync_shared", ROOT / "scripts" / "sync_shared.py")
    module = module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def owner(document, skills):
    return next((skill for skill in skills if document.is_relative_to(skill)), None)


def check_skill(skill):
    errors = []
    entry = skill / "SKILL.md"
    if not entry.is_file():
        return [f"{skill.relative_to(ROOT)}: missing skill entrypoint"]
    parts = entry.read_text().split("---", 2)
    if len(parts) != 3 or parts[0].strip():
        errors.append(f"{entry.relative_to(ROOT)}: must start with YAML frontmatter")
    else:
        # This package intentionally uses plain single-line name/description fields.
        fields = dict(re.findall(r"^(name|description): (.+)$", parts[1], re.M))
        if fields.get("name") != skill.name:
            errors.append(f"{skill.name}: skill name must match its directory")
        if not 1 <= len(fields.get("description", "")) <= 1024:
            errors.append(f"{skill.name}: description must contain 1–1024 characters")
    for required in [skill / "LICENSE", skill / "SOURCES.md",
                     *(skill / name for name in REQUIRED_SCRIPTS.get(skill.name, []))]:
        if not required.is_file():
            errors.append(f"Missing distribution file: {required.relative_to(ROOT)}")
    return errors


def check_shared(sync, skills):
    errors = []
    try:
        entries = sync.manifest()
    except (OSError, ValueError) as error:
        return [f"shared/manifest.json: {error}"]
    names = {path.name for path in SHARED.glob("*.md")}
    for name in sorted(names - set(entries)):
        errors.append(f"shared/{name}: not listed in shared/manifest.json")
    for name, consumers in sorted(entries.items()):
        if name not in names:
            errors.append(f"shared/manifest.json: missing source shared/{name}")
            continue
        for consumer in consumers:
            if SKILLS / consumer not in skills:
                errors.append(f"shared/manifest.json: unknown skill {consumer} for {name}")
    drift = False
    for source, copy in sync.copies():
        if not source.is_file() or copy.parent.parent not in skills:
            continue
        if not copy.is_file() or copy.read_text() != sync.expected(source):
            errors.append(f"{copy.relative_to(ROOT)}: differs from {source.relative_to(ROOT)}")
            drift = True
    expected_copies = {copy for _, copy in sync.copies()}
    for skill in skills:
        for copy in (skill / "references").glob("*.md"):
            if copy not in expected_copies and "Generated from shared/" in copy.read_text()[:200]:
                errors.append(f"{copy.relative_to(ROOT)}: generated copy not in shared/manifest.json")
                drift = True
    if drift:
        errors.append("run python3 scripts/sync_shared.py")
    return errors


def validate():
    skills = sorted(path for path in SKILLS.iterdir() if path.is_dir()) if SKILLS.is_dir() else []
    if not skills:
        return ["No skills found under skills/"]
    errors = []
    for skill in skills:
        errors.extend(check_skill(skill))
    for required in [ROOT / "README.md", ROOT / "LICENSE"]:
        if not required.is_file():
            errors.append(f"Missing distribution file: {required.relative_to(ROOT)}")
    errors.extend(check_shared(load_sync(), skills))

    graph = {}
    documents = sorted(path for path in ROOT.rglob("*.md") if ".git" not in path.parts)
    for document in documents:
        body = document.read_text()
        home = owner(document, skills)
        shared = document.is_relative_to(SHARED)
        if (home or shared) and re.search(r"/(Users|home)/[^\s]+", body):
            errors.append(f"{document.relative_to(ROOT)}: machine-specific path")
        links = []
        for target in re.findall(r"\[[^\]\n]+\]\(([^)\s]+)\)", body):
            url = urlsplit(target)
            if url.scheme or url.netloc or not url.path:
                continue
            destination = (document.parent / unquote(url.path)).resolve()
            if not destination.is_relative_to(ROOT):
                errors.append(f"{document.relative_to(ROOT)}: link escapes repository: {target}")
            elif not destination.exists():
                errors.append(f"{document.relative_to(ROOT)}: missing link: {target}")
            elif home and not destination.is_relative_to(home):
                errors.append(f"{document.relative_to(ROOT)}: installed reference escapes skill: {target}")
            elif shared and destination.parent != SHARED:
                errors.append(f"{document.relative_to(ROOT)}: shared file may link only to shared files: {target}")
            links.append(destination)
        graph[document] = links

    for skill in skills:
        entry = skill / "SKILL.md"
        reached, pending = set(), [entry]
        while pending:
            path = pending.pop()
            if path not in reached:
                reached.add(path)
                pending.extend(graph.get(path, []))
        for reference in (skill / "references").glob("*.md"):
            if reference not in reached:
                errors.append(f"Unreachable reference: {reference.relative_to(ROOT)}")
    return errors


if __name__ == "__main__":
    problems = validate()
    if problems:
        print("\n".join(problems), file=sys.stderr)
        raise SystemExit(1)
    print("PASS: package metadata shape, local links, portable references, shared copies and distribution files")

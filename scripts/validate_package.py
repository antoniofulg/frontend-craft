#!/usr/bin/env python3
"""Check the skill's portable file contract; installer discovery validates YAML."""

from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
SKILL = ROOT / "skills" / "frontend-craft"


def validate():
    errors = []
    entry = SKILL / "SKILL.md"
    if not entry.is_file():
        return ["Missing skill entrypoint"]
    text = entry.read_text()
    parts = text.split("---", 2)
    if len(parts) != 3 or parts[0].strip():
        errors.append("SKILL.md must start with YAML frontmatter")
    else:
        # This package intentionally uses plain single-line name/description fields.
        fields = dict(re.findall(r"^(name|description): (.+)$", parts[1], re.M))
        if fields.get("name") != SKILL.name:
            errors.append("Skill name must match its directory")
        if not 1 <= len(fields.get("description", "")) <= 1024:
            errors.append("Description must contain 1–1024 characters")

    graph = {}
    documents = sorted(ROOT.rglob("*.md"))
    for document in documents:
        body = document.read_text()
        if document.is_relative_to(SKILL) and re.search(r"/(Users|home)/[^\s]+", body):
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
            elif document.is_relative_to(SKILL) and not destination.is_relative_to(SKILL):
                errors.append(f"{document.relative_to(ROOT)}: installed reference escapes skill: {target}")
            links.append(destination)
        graph[document] = links

    reached, pending = set(), [entry]
    while pending:
        path = pending.pop()
        if path not in reached:
            reached.add(path)
            pending.extend(graph.get(path, []))
    for reference in (SKILL / "references").glob("*.md"):
        if reference not in reached:
            errors.append(f"Unreachable reference: {reference.relative_to(ROOT)}")
    for required in [ROOT / "README.md", ROOT / "LICENSE", SKILL / "LICENSE", SKILL / "SOURCES.md"]:
        if not required.is_file():
            errors.append(f"Missing distribution file: {required.relative_to(ROOT)}")
    return errors


if __name__ == "__main__":
    problems = validate()
    if problems:
        print("\n".join(problems), file=sys.stderr)
        raise SystemExit(1)
    print("PASS: package metadata shape, local links, portable references and distribution files")

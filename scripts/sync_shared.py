#!/usr/bin/env python3
"""Copy shared/*.md into each consuming skill's references/ folder.

shared/ is the source of truth and is not distributed. shared/manifest.json maps
each shared file to the skills that consume it. Edit the source, then run this.
"""

from pathlib import Path
import json


ROOT = Path(__file__).resolve().parents[1]
SHARED = ROOT / "shared"
HEADER = (
    "<!-- Generated from shared/{name} by scripts/sync_shared.py. "
    "Edit the source there, not this copy. -->\n\n"
)


def manifest():
    return json.loads((SHARED / "manifest.json").read_text())


def copies():
    """Yield (source, destination) for every manifest entry."""
    for name, skills in sorted(manifest().items()):
        for skill in skills:
            yield SHARED / name, ROOT / "skills" / skill / "references" / name


def expected(source):
    return HEADER.format(name=source.name) + source.read_text()


def sync():
    for source, destination in copies():
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_text(expected(source))
        print(f"synced {destination.relative_to(ROOT)}")


if __name__ == "__main__":
    try:
        sync()
    except (OSError, ValueError) as error:
        raise SystemExit(f"sync failed: {error}")

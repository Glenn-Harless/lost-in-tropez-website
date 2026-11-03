#!/usr/bin/env bash
# Cut a 30-second preview for a release page.
#   scripts/make-preview.sh <master file> <slug> <start seconds>
# Then add `preview: /audio/previews/<slug>.m4a` to src/content/releases/<slug>.md
set -euo pipefail
src="$1"; slug="$2"; start="$3"
ffmpeg -y -loglevel error -ss "$start" -t 30 -i "$src" \
  -af "afade=t=in:d=0.4,afade=t=out:st=28.5:d=1.5" -c:a aac -b:a 128k -movflags +faststart \
  "public/audio/previews/$slug.m4a"
ls -la "public/audio/previews/$slug.m4a"

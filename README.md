# Lost in Tropez website

[lostintropez.xyz](https://lostintropez.xyz/). Astro, on Netlify. Needs Node 24 (`.nvmrc`).

```bash
npm install
npm run dev
```

## Adding a release

Each release is one Markdown file, and its page lives at `/<file name>/`.

1. Save the cover as `src/assets/covers/<slug>.jpg` (square, at least 1400px).
2. Add `src/content/releases/<slug>.md`:

   ```yaml
   ---
   title: "No Relief"
   kind: Single            # or EP
   date: 2026-11-20
   tracks: 1
   cover: ../../assets/covers/no-relief.jpg
   spotify: track/XXXXXXXX # or album/XXXXXXXX; leave out until it's live
   appleMusic: https://music.apple.com/...
   soundcloud: https://soundcloud.com/lost-in-tropez/...
   preview: /audio/previews/no-relief.m4a
   ---
   ```

   With no `spotify` link, the page says "Out November 20" and offers a follow instead.
   `draft: true` keeps a release out of the live site. The paint colors come from the cover;
   set `pigments: ['#hex', ...]` to choose them yourself.

3. Cut a preview, if you want one: `scripts/make-preview.sh <master> <slug> <start seconds>`

## Meta pixel

Set `PUBLIC_META_PIXEL_ID` in Netlify's environment variables and redeploy. Until then no pixel
code loads. It only runs on release pages, and visitors from the EU, UK and Switzerland opt in first
(`netlify/edge-functions/region.js` tells the page where they are).

Optimize campaigns on the custom event `StreamClick` where `platform` is `spotify`. Other events:
`ViewContent`, `PreviewPlay` and `PreviewHalf`.

Add `?debug=1` to a release page to see its events and Spotify link on a phone.

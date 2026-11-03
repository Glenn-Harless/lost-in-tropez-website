import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const releases = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/releases' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kind: z.enum(['Single', 'EP']),
      date: z.coerce.date(),
      tracks: z.number().default(1),
      cover: image(),
      // "track/ID" or "album/ID". No Spotify link yet means the release page shows its date instead.
      spotify: z.string().optional(),
      appleMusic: z.string().url().optional(),
      soundcloud: z.string().url().optional(),
      preview: z.string().optional(),
      // Colours the paint uses. Pulled from the cover unless set here.
      pigments: z.array(z.string()).optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { releases };

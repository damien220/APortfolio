import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['Web App', 'CLI Tool', 'Library', 'API', 'Mobile App', 'Data/ML']),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    date: z.string(),
  }),
});

export const collections = { projects };

import { defineCollection, z } from 'astro:content'

const sharedSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  topic: z.string(),
  tags: z.array(z.string()),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
})

const blog = defineCollection({
  type: 'content',
  schema: sharedSchema,
})

const research = defineCollection({
  type: 'content',
  schema: sharedSchema,
})

export const collections = { blog, research }

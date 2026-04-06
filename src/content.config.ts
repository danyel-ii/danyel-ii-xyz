import { defineCollection, z } from 'astro:content'

const statusEnum = z.enum(['seed', 'active', 'stable', 'archived'])

const baseContentSchema = z.object({
  title: z.string(),
  summary: z.string(),
  status: statusEnum.default('seed'),
  topics: z.array(z.string()).default([]),
  created: z.coerce.date(),
  updated: z.coerce.date(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  related: z.array(z.string()).default([]),
})

const writingCollection = defineCollection({
  type: 'content',
  schema: baseContentSchema.extend({
    tags: z.array(z.string()).default([]),
  }),
})

const blog = writingCollection

const research = writingCollection

const notes = defineCollection({
  type: 'content',
  schema: baseContentSchema.extend({
    tags: z.array(z.string()).default([]),
  }),
})

const logs = defineCollection({
  type: 'content',
  schema: baseContentSchema.extend({
    tags: z.array(z.string()).default([]),
  }),
})

const projects = defineCollection({
  type: 'content',
  schema: baseContentSchema.extend({
    stack: z.array(z.string()).default([]),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    cover: z.string().optional(),
  }),
})

const topics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: statusEnum.default('stable'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    created: z.coerce.date(),
    updated: z.coerce.date(),
    related: z.array(z.string()).default([]),
    aliases: z.array(z.string()).default([]),
    order: z.number().int().optional(),
  }),
})

export const collections = {
  blog,
  research,
  notes,
  logs,
  projects,
  topics,
}

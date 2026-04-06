import { getCollection, type CollectionEntry } from 'astro:content'

import { humanizeSlug, normalizeTopicSlug } from './format'

export const writingCollections = ['blog', 'research', 'notes', 'logs'] as const
export const knowledgeCollections = ['blog', 'research', 'notes', 'logs', 'projects'] as const

export type WritingCollection = (typeof writingCollections)[number]
export type KnowledgeCollection = (typeof knowledgeCollections)[number]
export type KnowledgeEntry = CollectionEntry<KnowledgeCollection>
export type TopicEntry = CollectionEntry<'topics'>

const collectionLabels: Record<KnowledgeCollection, string> = {
  blog: 'Blog',
  research: 'Research',
  notes: 'Note',
  logs: 'Log',
  projects: 'Project',
}

const statusPriority: Record<string, number> = {
  stable: 0,
  active: 1,
  seed: 2,
  archived: 3,
}

export function isVisible<T extends { data: { draft?: boolean } }>(entry: T) {
  return !import.meta.env.PROD || !entry.data.draft
}

export function getEntryUpdated(entry: KnowledgeEntry) {
  return entry.data.updated ?? entry.data.created
}

export function getEntryTitle(entry: KnowledgeEntry | TopicEntry) {
  return entry.data.title
}

export function getEntrySummary(entry: KnowledgeEntry | TopicEntry) {
  return entry.data.summary
}

export function getCollectionLabel(collection: KnowledgeCollection) {
  return collectionLabels[collection]
}

export function getEntryHref(entry: KnowledgeEntry) {
  switch (entry.collection) {
    case 'blog':
      return `/blog/${entry.slug}/`
    case 'research':
      return `/research/${entry.slug}/`
    case 'notes':
      return `/notes/${entry.slug}/`
    case 'logs':
      return `/log/${entry.slug}/`
    case 'projects':
      return `/projects/${entry.slug}/`
  }
}

export function getTopicHref(topic: string) {
  return `/topics/${normalizeTopicSlug(topic)}/`
}

export function sortByUpdatedDesc<T extends { data: { updated: Date } }>(entries: T[]) {
  return [...entries].sort((a, b) => b.data.updated.getTime() - a.data.updated.getTime())
}

export function sortByCreatedDesc<T extends { data: { created: Date } }>(entries: T[]) {
  return [...entries].sort((a, b) => b.data.created.getTime() - a.data.created.getTime())
}

export function sortProjects(entries: CollectionEntry<'projects'>[]) {
  return [...entries].sort((a, b) => {
    if (Number(b.data.featured) !== Number(a.data.featured)) {
      return Number(b.data.featured) - Number(a.data.featured)
    }

    const statusDiff = (statusPriority[a.data.status] ?? 99) - (statusPriority[b.data.status] ?? 99)
    if (statusDiff !== 0) return statusDiff

    return b.data.updated.getTime() - a.data.updated.getTime()
  })
}

export function sortTopics(entries: CollectionEntry<'topics'>[]) {
  return [...entries].sort((a, b) => {
    const orderA = a.data.order ?? Number.MAX_SAFE_INTEGER
    const orderB = b.data.order ?? Number.MAX_SAFE_INTEGER
    if (orderA !== orderB) return orderA - orderB
    return a.data.title.localeCompare(b.data.title)
  })
}

export async function getVisibleCollection<K extends KnowledgeCollection | 'topics'>(collection: K) {
  const entries = await getCollection(collection)
  return entries.filter(isVisible)
}

export async function getAllKnowledgeEntries() {
  const grouped = await Promise.all(knowledgeCollections.map((collection) => getVisibleCollection(collection)))
  return grouped.flat()
}

export async function getAllTopicSlugs() {
  const [topicEntries, knowledgeEntries] = await Promise.all([
    getVisibleCollection('topics'),
    getAllKnowledgeEntries(),
  ])

  const topicSlugs = new Set<string>()

  for (const entry of topicEntries) {
    topicSlugs.add(normalizeTopicSlug(entry.slug))
  }

  for (const entry of knowledgeEntries) {
    for (const topic of entry.data.topics) {
      topicSlugs.add(normalizeTopicSlug(topic))
    }
  }

  return [...topicSlugs]
}

export async function getTopicContext(topicSlug: string) {
  const [topics, entries] = await Promise.all([
    getVisibleCollection('topics'),
    getAllKnowledgeEntries(),
  ])

  const normalized = normalizeTopicSlug(topicSlug)
  const topicEntry =
    topics.find((entry) => normalizeTopicSlug(entry.slug) === normalized) ??
    topics.find((entry) => entry.data.aliases.some((alias) => normalizeTopicSlug(alias) === normalized))

  const relatedEntries = entries.filter((entry) =>
    entry.data.topics.some((topic) => normalizeTopicSlug(topic) === normalized),
  )

  const title = topicEntry?.data.title ?? humanizeSlug(normalized)
  const summary =
    topicEntry?.data.summary ??
    'This topic is referenced by published material but does not yet have a curated hub entry.'

  return {
    topicEntry,
    topicSlug: normalized,
    title,
    summary,
    entries: sortByUpdatedDesc(relatedEntries),
  }
}

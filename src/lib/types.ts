export type SiteMeta = {
  name: string
  domain: string
  title: string
  subtitle: string
  status: string
  protocol: string
  focus: string[]
}

export type AppItem = {
  id: string
  title: string
  kind: 'tool' | 'app' | 'script' | 'lab'
  status: 'LIVE' | 'WIP' | 'RESEARCH'
  excerpt: string
  tags: string[]
  repoUrl?: string
  liveUrl?: string
  media?: {
    type: 'video' | 'image'
    src: string
    poster?: string
  }
  featured?: boolean
}

export type LearningTrack = {
  id: string
  title: string
  phase: 'Current' | 'Next' | 'Archived'
  summary: string
  bullets: string[]
  references?: string[]
  progress: number
}

export type SocialLink = {
  id: string
  label: string
  href: string
  value: string
}

export type NftItem = {
  id: string
  name: string
  collection: string
  year: string
  chain: string
  note: string
  image?: string
  href?: string
}

export type ContentMeta = {
  title: string
  description: string
  pubDate: Date
  topic: string
  tags: string[]
  draft?: boolean
  featured?: boolean
}

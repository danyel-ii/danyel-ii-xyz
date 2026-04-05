import dummyVideo from '../assets/works/Dummy.mp4'
import penVideo from '../assets/works/Pen-4.mp4'

import type { AppItem } from '../lib/types'

export const apps: AppItem[] = [
  {
    id: 'packet-lab',
    title: 'Packet Lab',
    kind: 'lab',
    status: 'LIVE',
    excerpt: 'A small inspection workspace for tracing packets, comparing headers, and annotating common protocol behavior.',
    tags: ['DNS', 'HTTP', 'Packets', 'Wireshark'],
    repoUrl: 'https://github.com/danyel-ii/packet-lab', // TODO: replace with real repository
    liveUrl: 'https://packet-lab.danyel-ii.xyz', // TODO: replace with real deployment
    media: {
      type: 'video',
      src: penVideo,
    },
    featured: true,
  },
  {
    id: 'cipher-notebook',
    title: 'Cipher Notebook',
    kind: 'tool',
    status: 'WIP',
    excerpt: 'Reference notes and small executable examples for substitution, transposition, and introductory modern cipher ideas.',
    tags: ['Crypto', 'Notes', 'Classical', 'Reference'],
    repoUrl: 'https://github.com/danyel-ii/cipher-notebook', // TODO: replace with real repository
    media: {
      type: 'video',
      src: dummyVideo,
    },
    featured: true,
  },
  {
    id: 'hash-playground',
    title: 'Hash Playground',
    kind: 'app',
    status: 'RESEARCH',
    excerpt: 'A comparison surface for hash functions, digest lengths, collision notes, and basic implementation observations.',
    tags: ['Crypto', 'Hash', 'SHA', 'MD5'],
    repoUrl: 'https://github.com/danyel-ii/hash-playground', // TODO: replace with real repository
  },
  {
    id: 'recon-desk',
    title: 'Recon Desk',
    kind: 'tool',
    status: 'WIP',
    excerpt: 'A restrained dashboard for reconnaissance tasks, checklist logging, and repeatable collection of public target metadata.',
    tags: ['Recon', 'OSINT', 'CLI', 'Workflow'],
    repoUrl: 'https://github.com/danyel-ii/recon-desk', // TODO: replace with real repository
  },
  {
    id: 'policy-mapper',
    title: 'Policy Mapper',
    kind: 'script',
    status: 'RESEARCH',
    excerpt: 'A parser for mapping policy statements into simpler relationship views for access review and documentation.',
    tags: ['Policy', 'Access', 'Parsing', 'Notes'],
    repoUrl: 'https://github.com/danyel-ii/policy-mapper', // TODO: replace with real repository
  },
  {
    id: 'lab-journal-cli',
    title: 'Lab Journal CLI',
    kind: 'script',
    status: 'LIVE',
    excerpt: 'A command-line utility for logging experiments, summarizing outcomes, and preserving clean notes after each lab session.',
    tags: ['CLI', 'Notes', 'Journal', 'Terminal'],
    repoUrl: 'https://github.com/danyel-ii/lab-journal-cli', // TODO: replace with real repository
  },
]

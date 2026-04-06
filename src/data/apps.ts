import dummyVideo from '../assets/works/Dummy.mp4'
import penVideo from '../assets/works/Pen-4.mp4'

import type { AppItem } from '../lib/types'

export const apps: AppItem[] = [
  {
    id: 'vokabeltrainer',
    title: 'Vokabeltrainer',
    kind: 'app',
    status: 'LIVE',
    excerpt: 'A deployed study tool for vocabulary practice with a clear utility-first interface and repeatable training flow.',
    tags: ['Study', 'UI', 'Training', 'Web'],
    liveUrl: 'https://vokabeltrainer-five.vercel.app/',
    media: {
      type: 'video',
      src: penVideo,
    },
    featured: true,
  },
  {
    id: 'swiss-tournaments',
    title: 'Swiss Tournaments',
    kind: 'app',
    status: 'LIVE',
    excerpt: 'A tournament management deployment focused on Swiss-system workflows, registrations, and structured event handling.',
    tags: ['Chess', 'Scheduler', 'Admin', 'Web'],
    liveUrl: 'https://turnier.schachmagie.xyz/',
    media: {
      type: 'video',
      src: dummyVideo,
    },
    featured: true,
  },
  {
    id: 'packet-lab',
    title: 'Packet Lab',
    kind: 'lab',
    status: 'LIVE',
    excerpt: 'A small inspection workspace for tracing packets, comparing headers, and annotating common protocol behavior.',
    tags: ['DNS', 'HTTP', 'Packets', 'Wireshark'],
    repoUrl: 'https://github.com/danyel-ii/packet-lab', // TODO: replace with real repository
    liveUrl: 'https://packet-lab.danyel-ii.xyz', // TODO: replace with real deployment
  },
  {
    id: 'cipher-notebook',
    title: 'Cipher Notebook',
    kind: 'tool',
    status: 'WIP',
    excerpt: 'Reference notes and small executable examples for substitution, transposition, and introductory modern cipher ideas.',
    tags: ['Crypto', 'Notes', 'Classical', 'Reference'],
    repoUrl: 'https://github.com/danyel-ii/cipher-notebook', // TODO: replace with real repository
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
    id: 'cyber-research-wiki',
    title: 'Cyber Research Wiki',
    kind: 'tool',
    status: 'LIVE',
    excerpt: 'A public notes surface for cyber-security study topics, quick references, and linked research paths.',
    tags: ['Wiki', 'Notes', 'Research', 'Reference'],
    liveUrl: 'https://danyel-ii.github.io/cyber-research-wiki/',
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

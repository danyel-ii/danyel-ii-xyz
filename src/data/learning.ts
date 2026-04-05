import type { LearningTrack } from '../lib/types'

export const learningTracks: LearningTrack[] = [
  {
    id: 'network-foundations',
    title: 'Network Foundations',
    phase: 'Current',
    summary: 'Studying packet structure, addressing, routing, and the mechanics that sit below higher-level security claims.',
    bullets: [
      'Reviewing TCP/IP behavior and packet capture workflows',
      'Documenting DNS, HTTP, and TLS observations in plain language',
      'Rebuilding small examples to clarify failure modes and assumptions',
    ],
    progress: 68,
  },
  {
    id: 'linux-terminal-practice',
    title: 'Linux / Terminal Practice',
    phase: 'Current',
    summary: 'Building confidence through repeatable shell workflows, system inspection, logging, and small automation scripts.',
    bullets: [
      'Practicing file, process, and permission inspection',
      'Writing small CLI helpers instead of manual checklists',
      'Keeping notes on commands worth revisiting and refining',
    ],
    progress: 74,
  },
  {
    id: 'cryptography-basics',
    title: 'Cryptography Basics',
    phase: 'Next',
    summary: 'Establishing a working baseline across hashing, encoding, encryption concepts, and protocol-adjacent terminology.',
    bullets: [
      'Comparing common hash functions and digest characteristics',
      'Studying practical use cases before deeper theory',
      'Linking cryptographic concepts back to real system behavior',
    ],
    progress: 42,
  },
  {
    id: 'web-app-security',
    title: 'Web App Security',
    phase: 'Archived',
    summary: 'Maintaining notes on web attack surfaces and testing patterns while broader systems knowledge catches up.',
    bullets: [
      'Reviewing authentication and session handling patterns',
      'Cataloging common findings in a reusable format',
      'Returning to OWASP material with better networking context',
    ],
    progress: 57,
  },
]

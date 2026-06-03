import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { execFile, spawn } from 'node:child_process'
import os from 'node:os'
import path from 'node:path'

const sourceRoot = '/Users/danyel-ii/SAFE/ono-sideboard/deck-packages'
const outputRoot = path.join(process.cwd(), 'public/images/ono-sideboard/decks')
const decks = ['gold-leaf', 'encryptas', 'marta', 'quatre-gats', 'sgt-pepper', 'maskless']

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'ignore' })
    child.on('error', reject)
    child.on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`${command} exited with ${code}`))
      }
    })
  })
}

function readZipEntry(zipPath, entryPath, encoding) {
  return new Promise((resolve, reject) => {
    execFile('unzip', ['-p', zipPath, entryPath], { encoding, maxBuffer: 20 * 1024 * 1024 }, (error, stdout) => {
      if (error) {
        reject(error)
      } else {
        resolve(stdout)
      }
    })
  })
}

function titleForSlug(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

async function prepareDeck(deckId) {
  const packagePath = path.join(sourceRoot, deckId, `ono-sideboard-${deckId}-1.0.0.zip`)
  if (!existsSync(packagePath)) {
    throw new Error(`Missing package: ${packagePath}`)
  }

  const manifest = JSON.parse(await readZipEntry(packagePath, 'deck.json', 'utf8'))
  const deckOutput = path.join(outputRoot, deckId)
  await rm(deckOutput, { recursive: true, force: true })
  await mkdir(deckOutput, { recursive: true })

  const tmpDir = await mkdtemp(path.join(os.tmpdir(), `ono-${deckId}-`))
  try {
    for (const card of manifest.cards) {
      const slug = card.slug
      const inputPath = path.join(tmpDir, `${slug}.png`)
      const outputPath = path.join(deckOutput, `${slug}.jpg`)
      await writeFile(inputPath, await readZipEntry(packagePath, card.image, 'buffer'))
      await run('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '78', '-Z', '520', inputPath, '--out', outputPath])
    }
  } finally {
    await rm(tmpDir, { recursive: true, force: true })
  }

  await writeFile(
    path.join(deckOutput, 'deck.json'),
    JSON.stringify(
      {
        deckId,
        title: manifest.title || titleForSlug(deckId),
        cards: manifest.cards.map((card) => ({
          slug: card.slug,
          title: card.title || titleForSlug(card.slug),
          image: `${card.slug}.jpg`,
        })),
      },
      null,
      2,
    ),
  )
}

for (const deck of decks) {
  await prepareDeck(deck)
  console.log(`Prepared ${deck}`)
}

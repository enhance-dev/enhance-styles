#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { argv, cwd, stderr, stdout } from 'node:process'
import { fileURLToPath } from 'node:url'
import styles from './index.mjs'

function getArg(key) {
  const value = argv.find(a => a.startsWith(`--${key}=`))
  if (!value) return null
  return value.replace(`--${key}=`, '')
}

const here = fileURLToPath(new URL('.', import.meta.url))

const configArg = getArg('config')
const outputArg = getArg('output')
const configPath = configArg
  ? join(cwd(), configArg)
  : join(here, './config.json')

let configBlob
try {
  configBlob = readFileSync(configPath, 'utf-8')
}
catch (err) {
  stderr.write(`Error reading config file: ${configPath}\n`)
  process.exit(1)
}

if (outputArg) {
  const outputPath = join(cwd(), outputArg)
  try {
    writeFileSync(outputPath, styles(configBlob))
  }
  catch (err) {
    stderr.write(`Error writing to output file: ${outputPath}\n`)
    process.exit(1)
  }
} else {
  stdout.write(styles(configBlob))
}

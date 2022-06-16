#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const arg = process.argv[2]
const configpath = arg || path.join(__dirname, './config.json')
import styles from './index.mjs'
const config = fs.readFileSync(configpath, 'utf-8')
process.stdout.write(styles(config))

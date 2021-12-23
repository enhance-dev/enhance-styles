#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const arg = process.argv[2]
const configpath = arg || path.join(__dirname, './config.json')
const styles = require('./')
const config = fs.readFileSync(configpath, 'utf-8')
process.stdout.write(styles(config))

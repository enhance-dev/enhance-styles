/*
 * WIP — see https://github.com/orgs/enhance-dev/projects/17/views/1?pane=issue&itemId=68736070
 */

import hexToHsl from '../lib/hex-to-hsl.mjs'

export default function colorUi(state = {}) {
  const { config = {} } = state
  const { color = {} } = config
  const { ui = { /* DEFAULTS HERE */ } } = color
  const { darkMode = { /* DEFAULTS HERE */ } } = ui

  const lightHsls = {
    accent: hexToHsl(ui.accent),
    background: hexToHsl(ui.background),
    body: hexToHsl(ui.body),
    error: hexToHsl(ui.error),
  }

  const darkHsls = {
    accent: hexToHsl(darkMode.accent),
    background: hexToHsl(darkMode.background),
    body: hexToHsl(darkMode.body),
    error: hexToHsl(darkMode.error),
  }

}

export default function Debug() {
  return `
/*** Debug ***/
.debug * { outline: 2px dotted var(--debug-color, rebeccapurple) }
.debug *:hover { border:2px solid var(--debug-color, rebeccapurple) }
  `
}

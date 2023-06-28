export default function Debug() {
  return `
/*** Debug ***/
.debug * { outline: 2px dotted var(--debug-color, darkviolet) }
.debug * * { outline: 2px dotted var(--debug-color, darkviolet) }
.debug * * * { outline: 2px dotted var(--debug-color, darkviolet) }
.debug * * * * { outline: 2px dotted var(--debug-color, darkviolet) }
.debug * * * * * { outline: 1px solid var(--debug-color, darkviolet) }
.debug * * * * * * { outline: 1px solid var(--debug-color, darkviolet) }
.debug * * * * * * * { outline: 1px solid var(--debug-color, darkviolet) }
.debug * * * * * * * * { outline: 1px solid var(--debug-color, darkviolet) }
.debug * *:hover { border:2px solid var(--debug-color, darkviolet) }
.debug * * *:hover { border:2px solid var(--debug-color, darkviolet) }
.debug * * * *:hover { border:2px solid var(--debug-color, darkviolet) }
.debug * * * * *:hover { border:2px solid var(--debug-color, darkviolet) }
.debug * * * * * *:hover { border:2px dotted var(--debug-color, darkviolet) }
.debug * * * * * * *:hover { border:2px dotted var(--debug-color, darkviolet) }
.debug * * * * * * * *:hover { border:2px dotted var(--debug-color, darkviolet) }
.debug * * * * * * * * *:hover { border:2px dotted var(--debug-color, darkviolet) }
  `
}

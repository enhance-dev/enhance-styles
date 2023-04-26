export default function family(state={}) {
  const { fonts={} } = state
  const _default = `
.font-sans{font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";}
.font-serif{font-family: Georgia, Cambria, "Times New Roman", Times, serif;}
.font-mono{font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;}

`

  const out = Object.keys(fonts).length
    ? Object.keys(fonts)
        .map(key => `.font-${key}{font-family: ${fonts[key]};}`)
        .join('\n')
    : _default

  return /*css*/`
/*** Family ***/
${out}
`
}

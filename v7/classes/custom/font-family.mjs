const defaultFonts = `
.font-sans{font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;}
.font-serif{font-family: Georgia, Cambria, Times New Roman, Times, serif;}
.font-mono{font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;}
`

export default function family({ fonts = defaultFonts } = {}) {
  const output = Object.keys(fonts).length
    ? Object.keys(fonts)
      .map(key => `.font-${key}{font-family: ${fonts[key]};}`)
      .join('\n')
    : defaultFonts

  return /*css*/`
/*** Font Family ***/
${output}
`
}

export default function fonts(state = {}) {
  const { config = {} } = state
  const { fonts = {
    sans: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif',
    serif: 'Georgia, Cambria, Times New Roman, Times, serif',
    mono: 'Source Code Pro, Roboto Mono, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace'
  } } = config

  let output = ''

  if (Object.keys(fonts).length) {
    output = '/*** Fonts ***/\n:root {'

    Object.keys(fonts).forEach(font => {
      output += '\n'
      output += `  --font-${font}: ${fonts[font]};`
    })

    output += '\n}'
  }

  return output
}


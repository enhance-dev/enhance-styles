export default {
  classes: true,
  reset: true,
  borders: {
    radii: [2, '9999em'],
    widths: ['0.125em', 2],
  },
  breakpoints: {
    lg: '48em',
  },
  color: {
    scales: {
      red: '#f00',
    },
    spots: {
      rebeccaPurple: '#663399',
    },
    ui: {
      accent: '#00f',
      background: '#fff',
      body: '#222',
      error: '#f00',
    },
  },
  customProperties: {
    preferredInlineSize: '52ch',
    maxInlineSize: '72ch',
  },
  fonts: {
    sans: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif',
    serif: 'Georgia, Cambria, Times New Roman, Times, serif',
    mono: 'Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  },
  grid: {
    steps: 6,
  },
  spaceScale: {
    steps: 6,
    viewportMin: 320,
    viewportMax: 1500,
    baseMin: 16,
    baseMax: 18,
    scaleMin: 'minor-third',
    scaleMax: 'perfect-fourth',
  },
  typeScale: {
    steps: 6,
    viewportMin: 320,
    viewportMax: 1500,
    baseMin: 16,
    baseMax: 18,
    scaleMin: 'minor-third',
    scaleMax: 'perfect-fourth',
  },
}


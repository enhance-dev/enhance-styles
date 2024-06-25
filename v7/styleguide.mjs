export default {
  classes: true,
  reset: true,
  borders: {
    radii: [2, 8, 16, 9999],
    widths: [1, 2, 4],
  },
  breakpoints: {
    lg: '48em',
  },
  color: {
    scales: {
    },
    spots: {
    },
    ui: {
      accent: '#00f',
      background: '#fff',
      body: '#222',
      error: '#f00',
      darkMode: {
        accent: '#00f',
        background: '#222',
        body: '#eee',
        error: '#f00',
      }
    },
  },
  customProperties: {
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



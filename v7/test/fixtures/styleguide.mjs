export default {
  classes: false,
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
      gray: '#808080',
    },
    spots: {
      magenta: '#ff0095',
      p3magenta: 'color(display-p3 1 0 0.58)',
    },
  },
  customProperties: {
    preferredInlineSize: '52ch',
    maxInlineSize: '72ch',
  },
  fonts: {
    sans: 'Papyrus, Comic Sans, sans-serif',
    serif: 'Wingdings, serif',
  },
  grid: {
    steps: 6,
  },
  spaceScale: {
    steps: 3,
    viewportMin: 320,
    viewportMax: 1500,
    baseMin: 16,
    baseMax: 24,
    scaleMin: 'minor-third',
    scaleMax: 'perfect-fourth',
  },
  typeScale: false,
}


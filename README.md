# enhance-styles
Single responsibility CSS classes — optimized for [Enhance](https://enhance.dev) and the web at large.

## Usage in Enhance apps

All new Enhance projects come preloaded with Enhance Styles; no installation is required.

To customize Enhance Styles within your Enhance application, see [the Customize section](#customize).

See [the standalone usage section](#standalone-usage) section for instructions on using Enhance Styles outside of Enhance apps.

## Notable concepts

Several aspects of Enhance Styles may be different from other CSS methodologies or frameworks you’ve used before. These are described briefly below; for more in depth documentation, refer to [the Enhance Styles docs on Enhance.dev](https://enhance.dev/docs/enhance-styles/).

### Logical properties

[CSS logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) are logical alternatives to layout based properties and values that were previously expressed imperatively (or 'physically') in CSS. For example, the block and inline directions provide a logical alternative to the top/bottom and left/right directions, in order to account for different writing modes.

Enhance Styles uses logical properties in its utility classes for margins, padding, borders, insets, width, height, and text alignment.

### Fluid type and spacing

Fluid type size and spacing allows fonts, margins, padding, and other aspects of layouts to scale in size gradually across a fluid range of viewport sizes, as opposed to changing suddenly at discrete breakpoints via media queries. This approach has been popularized by tools like [Utopia](https://utopia.fyi/). Using fluid type and spacing can reduce the amount of CSS you need to write. It especially reduces the amount of adjustments needing to be made at arbitrary viewport sizes. Of course, this strategy requires alignment between designers and developers; [the Utopia blog](https://utopia.fyi/blog) has some great reading on this subject.

Enhance Styles uses fluid units in its utility classes for font sizes, margins, padding, and gaps (for use in flexbox and grid layouts). We also emit custom properties for each step of the type and space scales.

The key concepts to be aware of are:

- **Steps**: Type and space scales contain a configurable number of steps. This number should be large enough to provide the designer and developer with a sufficient range of options for setting type size and negative space, but not so large that an excessive number of unused steps are generated (as this will bloat the CSS bundle and cause confusion for implementers).
- **Viewport widths**: Type and space scale values will only be fluidly interpolated between a declared minimum and maximum viewport width. Beyond these boundary sizes, the scale values will remain at their respective minimum and maximum sizes.
- **Base size**: The base (or starting) value to use for the scale. Each step on the scale will get larger than this size (or smaller, for negative steps) by an amount dictated by the current viewport width and the minimum and maximum scale factors.
- **Scale factors**: The ratio at which each value in the scale grows (or shrinks) from the previous step. Larger ratios produce larger differences between each step. At the minimum viewport width, the minimum scaling factor will be used; at the maximum viewport width, the maximum scaling factor will be used. Between the minimum and maximum viewports, the scale factor will be interpolated between its minimum and maximum values, based on the viewport width.

For Enhance Styles' configuration, the scale factors can be set using any [rational number](https://www.mathsisfun.com/rational-numbers.html). For convenience, the following [named ratios](https://24ways.org/2011/composing-the-new-canon) may be also be used:

| Named ratio | As a rational number |
|-|-|
| `minor-second`| 1.067 |
| `major-second`| 1.125 |
| `minor-third`| 1.2 |
| `major-third`| 1.25 |
| `perfect-fourth`| 1.333 |
| `augmented-fourth`| 1.414 |
| `perfect-fifth`| 1.5 |
| `golden-ratio`| 1.618 |
| `major-sixth`| 1.667 |
| `minor-seventh`| 1.778 |
| `major-seventh`| 1.875 |
| `octave`| 2 |

## Customize

Within an Enhance application, first add a `styleguide.json` JSON config file (or choose another name) at the root of your Enhance project. You can copy [the default configuration](https://github.com/enhance-dev/enhance-styles/blob/main/config.json) to get started. See individual sections below for more information on configuring these options.

Next, edit your project’s `.arc` file to tell Enhance Styles where to find this config file by including the following:

```arc
@enhance-styles
config styleguide.json
```

Enhance Styles will now use this configuration to customize its generated styles.

### `typeScale`

The configuration for the fluid typographic scale. Affects font size classes and the respective custom properties referenced by those classes.

**Note: Enhance Styles will automatically assign the generated base step in this scale (`var(--text0)`) to the `body` font size.**

Configuration options are:

- **`steps`** (default: `6`): The number of steps, including the base font size, to be used for the type scale. **Two negative steps will be generated** for setting type at sub-body sizes. (We do not currently generate additional negative steps as this often results in type that is far too small to read.)
- **`viewportMin`** (default: `320`): The minimum viewport width, in pixels. Font sizes will not decrease at viewports narrower than this width.
- **`viewportMax`** (default: `1500`): The maximum viewport width, in pixels. Font sizes will not increase at viewports wider than this width.
- **`baseMin`** (default: `16`): The base font size, in pixels, to be used at the minimum viewport width.
- **`baseMax`** (default: `18`): The base font size, in pixels, to be used at the maximum viewport width.
- **`scaleMin`** (default: `"minor-third"`): The minimum scaling factor, either as a rational number or a named ratio, to be used for computing all steps above and below the base font size, at the minimum viewport width.
- **`scaleMax`** (default: `"perfect-fourth"`): The maximum scaling factor, either as a rational number or a named ratio, to be used for computing all steps above and below the base font size, at the maximum viewport width.

### `spaceScale`

The configuration for the fluid spacing scale. Affects margin, padding, and gap classes and the respective custom properties referenced by those classes.

Configuration options are:

- **`steps`** (default: `6`): The number of steps, including the base step, to be used for the space scale. **A symmetric number of positive and negative steps will be generated** (for example, 6 steps would generate 1 base step, 5 positive steps, and 5 negative steps).
- **`viewportMin`** (default: `320`): The minimum viewport width, in pixels. Spacing sizes will not decrease at viewports narrower than this width.
- **`viewportMax`** (default: `1500`): The maximum viewport width, in pixels. Spacing sizes will not increase at viewports wider than this width.
- **`baseMin`** (default: `16`): The base spacing size, in pixels, to be used at the minimum viewport width.
- **`baseMax`** (default: `18`): The base spacing size, in pixels, to be used at the maximum viewport width.
- **`scaleMin`** (default: `"minor-third"`): The minimum scaling factor, either as a rational number or a named ratio, to be used for computing all steps above and below the base size, at the minimum viewport width.
- **`scaleMax`** (default: `"perfect-fourth"`): The maximum scaling factor, either as a rational number or a named ratio, to be used for computing all steps above and below the base size, at the maximum viewport width.

### `fonts`
`fonts` are the font stacks you wish to use. They can be named however you like, but it is recommended to retain a sans-serif, a serif and a mono stack for most pages.

The default stacks are:

- sans "system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif"
- serif "Georgia,Cambria,Times New Roman,Times,serif"
- mono "Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace"

### `theme`
`theme` is the set of theme colors.
Colors must be hexidecimal.
Colors can be named however you like.
Colors included in the theme setting will have a color scale generated.
It is recommended to pick a color, then choose a middle lightness as the basis of the scale so as to maximize the amount of steps in the scale that are not white or black.
You can choose your naming convention.
Bootstrap-like themes will use generic names such as "primary".
Material-like themes will choose a theme color name i.e. "indigo".

#### Light / dark theme support
Enhance styles supports native light / dark theme mode by default and allows you to override and augment the colors used.

Light / dark theme support can be overridden by specifying:

- `fore` the foreground color to be used as the default text and border color. You can also specify a  `dark` property in the color section to override.
- `back` the default light theme background color, defaults to white and can be overridden by setting a `light` value in the color section.
- `accent` will be set as the [`accent-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color) for the document and will be reflected in input and focus styling. This will generate `--accent`, `--accent-h` ( hue ), `--accent-s` ( saturation ), and `--accent-l` ( lightness ) custom properties for you to use in styles.
- `error` will be set as the error color for the document and will be reflected in input and validation styling. This will generate `--error`, `--error-h` ( hue ), `--error-s` ( saturation ), and `--error-l` ( lightness ) custom properties for you to use in styles.

You can add overrides for the dark theme by making an object with the key `dark` inside the theme section and adding colors there. The result will be output into a `@media (prefers-color-scheme: dark)` style block to enable overrides when the user has their preference set to dark.

#### Examples
Setting default light / dark theme colors:

```json
"theme": {
 "accent": "#0075db",
 "error": "#d60505",
 "back": "#fefefe",
 "fore": "#222222"
},
```

##### Overriding default light theme colors for dark mode
A default dark theme will be generated from the default light theme, so this is optional.

```json
"theme": {
 "accent": "#0075db",
 "error": "#d60505",
 "back": "#fefefe",
 "fore": "#222222"
 "dark": {
   "accent": "#0088ff",
   "error": "#ff3d3d"
 }
},
```

##### Restoring default theme colors
If you want to restore the default theme colors, copy and paste the code below into your `styleguide.json`:

```json
"theme": {
  "accent": "#007AFF",
  "accent-cotrast": "#fff",
  "light": "#f8f9fa",
  "dark": "#343a40",
  "primary": "#007bff",
  "secondary": "#6c757d",
  "success": "#28a745",
  "info": "#17a2b8",
  "warning": "#ffc107",
  "error": "#dc3545"
}
```

Theme scales are intended to give you enough colors for all use cases including hover, disabled, active and visited states.

##### Example color theme scale
```css
  --primary-100: hsl(212, 74.7%, 88%);
  --primary-200: hsl(212, 74.7%, 78%);
  --primary-300: hsl(212, 74.7%, 68%);
  --primary-400: hsl(212, 74.7%, 58%);
  --primary-500: hsl(212, 74.7%, 48%);
  --primary-600: hsl(212, 74.7%, 38%);
  --primary-700: hsl(212, 74.7%, 28%);
  --primary-800: hsl(212, 74.7%, 18%);
  --primary-900: hsl(212, 74.7%, 8%);
```

### Opting out of theme styles

The classes and custom properties generated by the `theme` configuration are optional, and can be excluded by setting the `theme` property in your styleguide to `false`:

```json
{
  "theme": false
}
```

### `color`
`color` is for one off spot colors. Colors must be specified as hexidecimal and can be named however you like. For example:

 `"crimson": "#eb0052"`

### `grid`
`grid` contains the settings for CSS grid classes.

- `steps` are the amount of sections you want in your grid. Default is 6.

### `properties`
`properties` is an object of named value custom properties. These can be used to supply variables for anything from drop shadows to animations. [Some inspiration](https://open-props.style/)

### `queries`
`queries` are the units for `min-width` media queries. This encourages a mobile first approach to styling. Start by making your mobile, single-column layout then resize your browser wider and only add media queries when your design requires it. Labels for the the sizes will be appended to the class names inside the media query block. i.e. `static-lg`. This allows you to add all the classes for every breakpoint and the classes will be overriden as the browser resizes. The default is `"lg": "48em"`

### `borders`
`borders` are settings for borders.
- `widths` is an array of border widths. The defaults are 1, 2, and 4

### `radii`
`radii` is an array of border radii. The defaults are 2, 8, 16, and 9999 ( for use with pill buttons )

### `reset`

Enhance Styles includes a CSS reset by default. To opt out of this reset being included in the stylesheet emitted by Enhance Styles, add the following to your configuration:

```json
{
  "reset": false
}
```

## Standalone usage

To use Enhance Styles in other applications or frameworks, clone the repository:

```shell
git clone https://github.com/enhance-dev/enhance-styles.git
```

Enhance Styles can be customized to your liking. See [the customization instructions](#customize) for a reference to which aspects of Enhance Styles can be adjusted to your liking. After writing your preferred `config.json` options, write the generated styles to `dist/enhance.css`:

```shell
npm run build
```

Minify `dist/enhance.css` to `dist/enhance.min.css`:

```shell
npm run prod
```

Copy `enhance.css` or `enhance.min.css` to your project and either reference it with the `<link>` element, or inline it in a `<style>` element in your document head.

## Prior art

Enhance styles would not exist without the breakthrough thinking of [Adam Morse](https://mrmrs.cc/) who realized that creating a capped size stylesheet with common, single use, low specificity classes results in better performance and maintanance than append only stylesheets that can only grow as more features are added. His CSS work can be seen in [Tachyons](https://tachyons.io/).


Much of the implementation of our fluid scales was adapted from [@georgedoescode/fluid-design-system-on-demand-builders](https://github.com/georgedoescode/fluid-design-system-on-demand-builders), which was itself adapted from [Utopia](https://utopia.fyi).

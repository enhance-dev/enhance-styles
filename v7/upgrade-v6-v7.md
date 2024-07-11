# Upgrade Guide: v6 → v7

Upgrading from Enhance Styles version 6 to version 7 is fairly straightforward. Breaking changes are limited to the configuration file, and the naming of several generated custom properties.

## Configuration file

We’ve chosen to write the configuration file for v7 in JavaScript; previous versions of Enhance Styles used [a JSON configuration file](https://github.com/enhance-dev/enhance-styles/blob/7730b2d66ee531df9926cc41581ab90f4ed945f4/config.json). Additionally, the structure and naming of some of the configuration file’s properties have changed.

### Format

Start by renaming your configuration file to use a `.mjs` extension rather than a `.json` extension.

Next, reformat the contents of the file to export a JavaScript object. For example, given the following minimal configuration file written in JSON:

```json
{
  "fonts": {
    "sans": "Helvetica Neue, sans-serif"
  }
}
```

…the configuration would be reformatted to look like this:

```javascript
export default {
  fonts: {
    sans: 'Helvetica Neue, sans-serif'
  }
}
```

Note that, since you’re now exporting a JavaScript object, property names don’t need to be quoted by default, and additional conventions such as comments and hanging commas can be used.

### Property structure and naming

The following objects and properties have been updated in structure and/or naming:

#### Borders and border radii

The `borders` object now contains the `radii` property in addition to the `widths` property.

Before:

```json
{
  "borders": {
    "widths": [1, 2, 4]
  },
  "radii": [2, 8, 16, 9999]
}
```

After:

```javascript
borders: {
  widths: [1, 2, 4],
  radii: [2, 8, 16, 9999]
}
```

#### Queries → breakpoints

The object previously named `queries` is now named `breakpoints`, as it is intended specifically for enumerating breakpoint based media queries.

Before:

```json
{
  "queries": {
    "lg": "48em"
  }
}
```

After:

```javascript
breakpoints: {
  lg: '48em'
}
```

#### Properties → custom properties

The object previously named `properties` is now named `customProperties` for clarity.

Before:

```json
{
  "properties": {
    "lineLength": "52ch"
  }
}
```

After:

```javascript
customProperties: {
  lineLength: '52ch'
}
```

#### Color and theme

The specification of colors in general has been overhauled in version 7 in the interest of clarity.

Previously, colors defined in the `theme` object specified a base colour for generated color scales (e.g. `red` → `red-100`, `red-200`, etc), while colours defined in `colors` acted as spot colors (e.g. `crimson` → `crimson`). Additionally, the reserved properties `theme.fore`, `theme.back`, `theme.accent`, and `theme.error` were used to specify colors for [light-dark support](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark), with the additional reserved property `theme.dark` used to override the automatically generated dark mode variants.

For version 7, `color` now acts as a parent object for all color related configuration. `color.scales` is used for specifying base colours for generated color scales, while `color.spots` is used for specifying one off spot colors. We have temporarily removed the `theme` property and support for automatic light-dark colors as this resulted in some confusion for users; we’re investigating the best way to reintroduce this functionality in an additive fashion in an upcoming release.

Before:

```json
{
  "color": {
    "crimson": "#eb0052"
  },
  "theme": {
    "red": "#ff0000",
    "green": "#00ff00"
  }
}
```

After:

```javascript
color: {
  spots: {
    crimson: '#eb0052'
  },
  scales: {
    red: '#ff0000',
    green: '#00ff00',
  },
}
```

## Custom property naming

Custom property naming in version 6 suffered from inconsistent hyphenation patterns, which also didn't line up with hyphenation patterns used in matching class names. For example, the space and type scale custom properties used a double hyphen to indicate a negative index in the space/type scales (`--space--1`, `--space-0`, `--space-1`, etc), while the matching class names used a single hyphen to indicate negative indexes (e.g. `.m-1`, `.m0`, `.m1`, etc).

For version 7, we have converged on the hyphenation patterns already in use in Enhance Styles’ class names, and updated the patterns used in generated custom properties to reflect this. In short: custom properties with numbers use a hyphen before the number to indicate a negative value; positive values have no hyphen before the number.

To account for this, you'll need to find the affected custom properties you’ve referenced in your scoped element styles or global CSS (if any) and update their names.

The following groups of custom properties have been renamed; refer to the 'before' and 'after' examples for guidance on renaming:

| Module | Before | After |
|-|-|-|
| Color scales | `var(--red-100)` | `var(--red100)` |
| Type scale | `var(--text--1)`, `var(--text-1)` | `var(--text-1)`, `var(--text1)` |
| Space scale | `var(--space--1)`, `var(--space-1)` | `var(--space-1)`, `var(--space1)` |


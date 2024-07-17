# Enhance Styles

**Parametric CSS for [Enhance](https://enhance.dev) and beyond**

Contents:

- [Installation & usage](#installation-and-usage)
  - [For Enhance](#for-enhance)
  - [Standalone usage](#standalone-usage)
- [Overview](#overview)
  - [What is parametric CSS?](#what-is-parametric-css)
  - [Prior art](#prior-art)
  - [Optional classes](#optional-classes)
- [Customization](#customization)
- [Further documentation](#further-documentation)

## Installation and usage

### For Enhance

Enhance Styles is optimized for use in [Enhance](https://enhance.dev), and is typically included in new Enhance projects by default (unless your Enhance app has been created using a custom project template).

If you need to add Enhance Styles to your Enhance app, follow the steps below.

First, install [the Enhance Styles plugin](https://github.com/enhance-dev/arc-plugin-styles):
```shell
npm i @enhance/arc-plugin-styles
```

Next, add the plugin in your project’s `.arc` file:
```arc
@app
my-app

# Define your plugins pragma and add the Enhance Styles plugin
@plugins
enhance/arc-plugin-styles

# Enable the plugin
@enhance-styles
# Optionally use a custom configuration file
config ./styleguide.js
```

Finally, include the generated styles in your project’s `head.mjs` file:

```javascript
import { getStyles } from '@enhance/arc-plugin-styles'

// create an object with the generated stlyes in multiple formats
const styles = getStyles.all() 

// Choose your preferred method for including styles:
const link = styles.link   // a <link> tag pointing to your generated styles
const style = styles.style // a <style> tag containing your generated styles

export default function Head () {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        ${style}
        <-- other head contents… -->
      </head>
  `
}
```

Restart your development server. You now have Enhance Styles up and running in your Enhance project. Styles will be automatically regenerated if changes are made to your [custom configuration](#customization) (if one exists).

### Standalone usage

Enhance Styles can be used as a standalone library in any project or framework that allows for the insertion of arbitrary CSS files. The built-in CLI can be used both to generate CSS files for use, and in more complex application pipelines to (re)generate CSS as required.

The steps below demonstrate the basic usage of the CLI, which can be used as a starting point for more advanced used cases.

To begin, install Enhance Styles from NPM:
```shell
npm i @enhance/styles
```

With the package installed, you can now interact with its CLI via the use of [`npx`](https://docs.npmjs.com/cli/v10/commands/npx). For example, to generate your styles at the path `./public/enhance-styles.css` using the default configuration:

```shell
npx enhance-styles --output=./public/enhance-styles.css
```

To generate styles using [a custom configuration](#customization), use the `--config` parameter:

```shell
npx enhance-styles --config=./styleguide.js --output=./public/enhance-styles.css
```

The CLI can also be used more programmatically by including it as a script in your package manifest:

```json
{
  "scripts": {
    "enhance-styles": "enhance-styles --config=./styleguide.js output=./public/enhance-styles.css"
  }
}
```

This script can be run just like any other NPM script, using `npm run enhance-styles`. This can then be factored into other processes in your application pipeline if required.

## Overview

Enhance Styles is a configurable CSS toolkit for generating CSS that adheres to the principles of an approach we refer to as *parametric CSS*, and which is optimized for performance, versatility, and scalability.

### What is parametric CSS?

‘Parametric CSS’ is a term we use to refer to our particular approach of authoring CSS. We consider our approach to be an incremental evolution of existing CSS methodologies, based on many years of research and usage.

In short, we define parametric CSS as follows:

1. Parametric CSS is derived from a **configurable styleguide** that constrains the central characteristics of a design language to a predefined set of values (for example: font sizes, spacing intervals, a color palette…).
2. Parametric CSS generates discrete, single purpose units of style that are **composable** (single units can be combined to build complex designs), **complementary** (units implement one style and one style only, and thus do not interact or introduce side effects), and **constant** (the style a unit implements does not change unless the configuration is updated). These units of style can be in the form of classes, classes utilizing custom properties, or custom properties on their own.
3. Parametric CSS serves as a base for **design systems and global styles**. While it can be used to apply those styles to discrete components, it is not intended to create bespoke styles local to specific components. Other CSS methodologies can be used in tandem for these design challenges, while relying on parametric CSS as a common baseline for performance, scalability, and versatility.

### Prior art

By referring to our approach as parametric CSS rather than by the name (or a modification of) an existing methodology, we’re not looking to disregard the important, category defining work of other authors, but rather to clarify and assert the principles behind our approach. 

Our modelling of parametric CSS draws on the work of designers and developers such as [Tim Brown](https://tbrown.org/) (and his work on [modular type on the web](https://alistapart.com/article/more-meaningful-typography/)), [Adam Morse](https://mrmrs.cc/)  ([Tachyons](https://tachyons.io/), [Components AI](https://components.ai/)), [Brent Jackson](https://jxnblk.com/) ([Theme UI](https://theme-ui.com/)), and [James Gilyead](https://www.hustlersquad.net/) & [Trys Mudford](https://www.trysmudford.com/) ([Utopia](https://utopia.fyi/)), among others.

### Optional classes

Out of the box, Enhance Styles provides a wide base of parametric single purpose classes and custom properties that can be used as a global styling system. These classes and custom properties are derived from a fully configurable styleguide, making Enhance Styles ideal for use with new and preexisting design systems and brand standards.

For those who wish to construct their own CSS classes, Enhance Styles can be configured to emit *only* custom properties, which can be used in your own application stylesheets. This allows authors to leverage its parametric configurability (and its automation of creating fluid scales, color palettes, etc) while utilizing whichever CSS methodologies they feel most comfortable with.

For further guidance on working with Enhance Styles, refer to [the Enhance Styles microsite](?)

## Customization

Enhance Styles’ generated custom properties and classes can be configured to your liking, making it extremely suitable for integration with new and existing design systems and brand guidelines.

Customization of Enhance Styles is managed via a configuration file; see [Installation and usage](#installation-and-usage) for guidance on how to specify the configuration file based on how you’re using Enhance Styles.

The configuration file must provide an object as its default export (i.e. `export default { /*…*/ }`. The properties of this configuration object are documented below.

| Property | Description | Type | Default |
|-|-|-|-|
| `classes` | Enable to include single purpose classes in Enhance Styles’ output; disable to only emit custom properties | boolean | `true` |
| `reset` | Enable to include a CSS reset with Enhance Styles’ output; disable to exclude it | boolean | `true` |
| `borders` | The parent object for border configurations | object | - |
| `borders.radii` | Values to use for border radius properties and classes | array of strings and/or numbers | `[2, 4, 8, 9999]` |
| `borders.widths` | Values to use for border width properties and classes | array of strings and/or numbers | `[1, 2, 4]` |
| `breakpoints` | Named breakpoints enumerating min-width viewport media query values; breakpoint scoped classes will be suffixed with the names of the keys of this object at the viewport width specified | - |
| `color` | The parent object for color configurations | object | - |
| `color.scales` | Set of named colors with values to use as the median entry for generated color scales; resulting scales will use the key of each entry as their name plus a base 100 suffix from 100 to 900; entries from 400–100 will be progressively lighter; entries from 600–900 will be progressively darker; the -500 entry will duplicate the value provided for each color; colors must be suppled as hexadecimal values | object of string values | `{ gray: '#808080'  }` |
| `color.spots` | Set of named spot colors to use for color custom properties; colors can be supplied in any standardized format | object of string values | - |
| `customProperties` | Set of arbitrary names and values to use for CSS custom properties | object of string values | - |
| `fonts` | Set of named font stacks to use for font custom properties and classes | object of string values | `{ sans: '…', serif: '…', mono: '…' }` |
| `grid` | The parent object for grid configurations | object | - |
| `grid.steps` | The number of steps to use when generating `[column\|row]-[start\|end]` grid classes | number | `6` |
| `spaceScale` | Configuration for the fluid modular spacing scale custom properties and margin, padding, and gap classes | object | - |
| `spaceScale.steps` | The number of symmetrical intervals to create for the space scale, plus the base size | number | `6` |
| `spaceScale.viewportMin` | The width, in pixels, of the minimum viewport width the scale should be fluid within | number | `320` |
| `spaceScale.viewportMax` | The width, in pixels, of the maximum viewport width the scale should be fluid within | number | `1500` |
| `spaceScale.baseMin` | The base spacing interval size, in pixels, at the minimum viewport width | number | `16` |
| `spaceScale.baseMax` | The base spacing interval size, in pixels, at the maximum viewport width | number | `18` |
| `spaceScale.scaleMin` | The ratio, either as a rational number or a named ratio, to use for spacing intervals at the minimum viewport width | number or string | `minor-third` |
| `spaceScale.scaleMax` | The ratio, either as a rational number or a named ratio, to use for spacing intervals at the maximum viewport width | number or string | `perfect-fourth` |
| `typeScale` | Configuration for the fluid modular type scale custom properties and associated font size classes | object | - |
| `typeScale.steps` | The number of positive intervals, including the base size, for the type scale (two negative intervals added automatically) | number | `6` |
| `typeScale.viewportMin` | The width, in pixels, of the minimum viewport width the scale should be fluid within | number | `320` |
| `typeScale.viewportMax` | The width, in pixels, of the maximum viewport width the scale should be fluid within | number | `1500` |
| `typeScale.baseMin` | The base font size, in pixels, at the minimum viewport width | number | `16` |
| `typeScale.baseMax` | The base font size, in pixels, at the maximum viewport width | number | `18` |
| `typeScale.scaleMin` | The ratio, either as a rational number or a named ratio, to use for font size intervals at the minimum viewport width | number or string | `minor-third` |
| `typeScale.scaleMax` | The ratio, either as a rational number or a named ratio, to use for font size intervals at the maximum viewport width | number or string | `perfect-fourth` |

For the space and type scales, the following common ratios can be referenced by name for the `scaleMin` and `scaleMax` properties:

```javascript
{
  'minor-second': 1.067,
  'major-second': 1.125,
  'minor-third': 1.2,
  'major-third': 1.25,
  'perfect-fourth': 1.333,
  'augmented-fourth': 1.414,
  'perfect-fifth': 1.5,
  'golden-ratio': 1.618,
  'major-sixth': 1.667,
  'minor-seventh': 1.778,
  'major-seventh': 1.875,
  octave: 2,
}
```

If you’d like to visualize the output of these scales before you have content to test them with, we recommend tools such as [Tim Brown’s modularscale.com](https://www.modularscale.com/) to do so.

## Further documentation

Additional documentation and guidelines can be found on the [Enhance Styles microsite](?)


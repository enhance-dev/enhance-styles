# Enhance Styles

**Parametric CSS for [Enhance](https://enhance.dev) and beyond**

Contents:

- [Installation & usage](#installation-and-usage)
  - [For Enhance](#for-enhance)
  - [Standalone usage](#standalone-usage)
- [Overview](#overview)
  - [What is parametric CSS?](#what-is-parametric-css)
- [Customization](#customization)
- Further documentation
- Prior art

For further guidance and documentation, refer to [the Enhance Styles microsite](?)

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

1. Parametric CSS is derived from a **configurable styleguide** that constrains the central characteristics of a design language to a predefined set of values (for example: font sizes, spacing intervals, a colour palette…).
2. Parametric CSS generates discrete, single purpose units of style that are **composable** (single units can be combined to build complex designs), **complementary** (units implement one style and one style only, and thus do not interact or introduce side effects), and **constant** (the style a unit implements does not change unless the configuration is updated). These units of style can be in the form of classes, classes utilizing custom properties, or custom properties on their own.
3. Parametric CSS serves as a base for **design systems and global styles**. While it can be used to apply those styles to discrete components, it is not intended to create bespoke styles local to specific components. Other CSS methodologies can be used in tandem for these design challenges, while relying on parametric CSS as a common baseline for performance, scalability, and versatility.

By referring to our approach as parametric CSS rather than by the name (or a modification of) an existing methodology, we’re not looking to disregard the important, category defining work of other authors, but rather to clarify and assert the principles behind our approach. 

Our modelling of parametric CSS draws on the work of designers and developers such as [Tim Brown](https://tbrown.org/) (and his work on [modular type on the web](https://alistapart.com/article/more-meaningful-typography/)), [Adam Morse](https://mrmrs.cc/)  ([Tachyons](https://tachyons.io/), [Components AI](https://components.ai/)), [Brent Jackson](https://jxnblk.com/) ([Theme UI](https://theme-ui.com/)), and [James Gilyead](https://www.hustlersquad.net/) & [Trys Mudford](https://www.trysmudford.com/) ([Utopia](https://utopia.fyi/)), among others.

Out of the box, Enhance Styles provides a wide base of parametric single purpose classes and custom properties that can be used as a global styling system. These classes and custom properties are derived from a fully configurable styleguide, making Enhance Styles ideal for use with new and preexisting design systems and brand standards.

For those who wish to construct their own CSS classes, Enhance Styles can be configured to emit only custom properties for use in application stylesheets. This allows authors to leverage its parametric configurability (and its automation of creating fluid scales, colour palettes, etc) while utilizing whatever additional CSS methodology they feel most comfortable with.

For further guidance on working with Enhance Styles, refer to [the Enhance Styles microsite](?)

# Customization

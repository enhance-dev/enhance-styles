# Enhance Styles

**Parametric CSS for [Enhance](https://enhance.dev) and beyond**

Contents:

- [Installation & usage](#installation-and-usage)
  - [For Enhance](#for-enhance)
  - [Standalone usage](#standalone-usage)
- Overview
- Customization
- Further documentation
- Prior art

## Installation and usage

### For Enhance

Enhance Styles is optimized for use in [Enhance](https://enhance.dev), and is typically included in new Enhance projects by default (unless your Enhance app has been creating using a custom project template). If you need to add Enhance Styles to your Enhance app, follow the steps below.

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

Restart your development server. You now have Enhance Styles up and running in your Enhance project.

### Standalone usage

Enhance Styles can be used as a standalone library in any project or framework that allows for the insertion of arbitrary CSS files. The built-in CLI can be used both to generate CSS files for use as you like, or it can be used in more complex application pipelines to (re)generate CSS as required. The steps below demonstrate the basic usage, which can be used as a starting point for more advanced used cases.

To begin, install Enhance Styles from NPM:
```shell
npm i @enhance/styles
```

With the project installed, you can now interact with its CLI via the use of [`npx`](https://docs.npmjs.com/cli/v10/commands/npx). For example, to generate a CSS file at the path `./public/enhance-styles.css` using the default configuration:

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

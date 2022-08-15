# enhance-styles
Functional utility classes

## Install
`git clone https://github.com/enhance-dev/enhance-styles.git`
`cd enhance-styles`

## Usage

`npm run build`

> Outputs default stylesheet in `enhance.css`

`npm run prod`

> Outputs a minified version as well `enhance.min.css`

## Customize

Edit `config.json` and rerun to output your customized stylesheet.

### base
`base` is the unitless base type size of the modular scale. Browsers default to 16, enhance styles defaults to 18.
`html {font-size: 18px;}`

### scale
`scale` consists of the modular scale settings.

enhance styles uses a [modular scale](https://www.modularscale.com/) to generate vizual harmony within the spacing, sizing and padding.
enhance style scales use a base font relative naming convention that uses positive numbers when increasing the scale increment and negative numbers when decreasing the scale increment.

 ```css
 /* Font sizes derived from a type scale */
 /* Up the scale ( positive numbers ) */
.text5{font-size:4.209rem;}/* 75.757px */ 
.text4{font-size:3.157rem;}/* 56.832px */ 
.text3{font-size:2.369rem;}/* 42.635px */ 
.text2{font-size:1.777rem;}/* 31.984px */ 
.text1{font-size:1.333rem;}/* 23.994px */ 
/* Base font size */
.text0{font-size:1rem;}/* 18px */ 
 /* Down the scale ( negative numbers ) */
.text-1{font-size:0.75rem;}/* 13.503px */ 
.text-2{font-size:0.563rem;}/* 10.13px */ 
.text-3{font-size:0.422rem;}/* 7.599px */ 
.text-4{font-size:0.317rem;}/* 5.701px */ 
.text-5{font-size:0.238rem;}/* 4.277px */
```
The scale is applied to `margin`, `padding` and `font-size`

- `ratio` is the ratio between steps in the scale. The default is perfectFourth. It can either be set to a number of your choosing or you can use one of these included ratio names
  - minorSecond
  - majorSecond
  - minorThird
  - majorThird
  - perfectFourth
  - augFourth
  - perfectFifth
  - minorSixth
  - goldenSection
  - majorSixth
  - minorSeventh
  - majorSeventh
  - octave
  - majorTenth
  - majorEleventh
  - majorTwelfth
  - doubleOctave
- `steps` are the number of steps in the scale to output. The default is 12.
 
### fonts
`fonts` are the font stacks you wish to use. They can be named however you like, but it is recommended to retain a sans-serif, a serif and a mono stack for most pages. 
The default stacks are:
- sans "system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif"
- serif "Georgia,Cambria,Times New Roman,Times,serif"
- mono "Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace"

#### example
`font-sans`

### theme
`theme` is the set of theme colors. 
Colors must be hexidecimal. 
Colors can be named however you like. 
Colors included in the theme seting will have a color scale generated. 
It is recommended to pick a color, then choose a middle lightness as the basis of the scale so as to maximize the amount of steps in the scale that are not white or black.
You can choose your naming convention. 
Bootstrap like themes will use generic names such as "primary" 
Material like themes will choose a theme color name i.e. 'indigo'
There are two special names, light and dark. These will not have a scale generated.
- `light` is meant to be used as a light text color
- `dark` is meant to be used as a dark text color

The default theme uses a Boostrap like naming convention
- light "#fff"
- dark "#222"
- primary "#1f74d6"
- secondary "#7327ce"
- success "#2cdd93"
- info "#2196f3"
- warning "#ffeb3b"
- error "#e21893"

These theme scales are intended to give you enough colors for all use cases including hover, disabled, active and visited states.

#### example color theme scale
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

### color
`color` is for one off spot colors. Colors must be specified as hexidecimal and can be named however you like.    
#### example color
 `"crimson": "#eb0052"`

### grid
`grid` contains the settings for a css grid based grid
- steps are the amount of sections you want in your grid. Default is 6.

### properties
`properties` is an array of custom properties. These can be used to supply variables for anything from drop shadows to animations. [Some inspiration](https://open-props.style/) 

### queries
`quries` are the units for `max-width` media queries. This encourages a mobile first approach to styling. Start by making your mobile, single-column layout then resize your browser wider and only add media queries when your design requires it. Labels for the the sizes will be appended to the class names inside the media query block. i.e. `static-lg`. This allows you to add all the classes for every breakpoint and the classes will be overriden as the browser resizes. The default is `"lg": "48em"`

### borders
`borders` are settings for borders.
- `widths` is an array of border widths. The defaults are 1, 2, and 4

### radii
`radii` is an array of border radii. The defaults are 2, 8, 16, and 9999 ( for use with pill buttons )


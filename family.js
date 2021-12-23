module.exports = function family(query='') {
  return /*css*/`
/* FAMILY */
.font-sans${query}{font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";}
.font-serif${query}{font-family: Georgia, Cambria, "Times New Roman", Times, serif;}
.font-mono${query}{font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;}
`
}

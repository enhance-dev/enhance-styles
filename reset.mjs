export default function reset (query) {
  return /*css*/`
/*** Reset ***/
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
 margin: 0;
 padding: 0;
 border: 0 solid transparent;
}
html:focus-within {
  scroll-behavior: smooth;
}
body {
  min-height: 100vh;
}
audio,
canvas,
embed,
iframe,
img,
object,
picture,
svg,
video {
  display: block;
  max-width: 100%;
}
button,
input,
select,
textarea {
  font: inherit;
  line-height: inherit;
  color: inherit;
}
a {
  cursor: pointer;
  color: inherit;
  text-decoration: inherit;
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}
button,
[role="button"] {
  cursor: pointer;
  background-color: transparent;
}
code {
  font: inherit;
  font-size: inherit;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
ul[role='list'],
ol[role='list'] {
 list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
textarea {
  vertical-align: top;
  overflow: auto;
}
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`
}

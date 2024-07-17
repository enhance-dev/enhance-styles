export default function opacity({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Opacity ***/
.opacity-0${breakpoint}{opacity:0;}
.opacity-25${breakpoint}{opacity:0.25;}
.opacity-50${breakpoint}{opacity:0.5;}
.opacity-75${breakpoint}{opacity:0.75;}
.opacity-100${breakpoint}{opacity:1.0;}
`
}

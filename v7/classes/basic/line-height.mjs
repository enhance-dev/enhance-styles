export default function lineHeight({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Line Height ***/
.leading5${breakpoint}{line-height: 2;}
.leading4${breakpoint}{line-height: 1.625;}
.leading3${breakpoint}{line-height: 1.5;}
.leading2${breakpoint}{line-height: 1.375;}
.leading1${breakpoint}{line-height: 1.25;}
.leading0${breakpoint},
.leading-none${breakpoint}{line-height:1;}
`
}

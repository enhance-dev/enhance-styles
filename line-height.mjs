export default function lineHeight (query='') {
  return /*css*/`
/*** Line Height ***/
.leading5${query}{line-height: 2;}
.leading4${query}{line-height: 1.625;}
.leading3${query}{line-height: 1.5;}
.leading2${query}{line-height: 1.375;}
.leading1${query}{line-height: 1.25;}
.leading0${query},
.leading-none${query}{line-height:1;}
`
}

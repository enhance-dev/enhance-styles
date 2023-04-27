export default function background(state={}) {
  const { query='' } = state
  return /*css*/`
/*** Background ***/
.bg-fixed${query}{background-attachment:fixed;}
.bg-local${query}{background-attachment:local;}
.bg-scroll${query}{background-attachment:scroll;}
.bg-bottom${query}{background-position:bottom;}
.bg-center${query}{background-position:center;}
.bg-left${query}{background-position:left;}
.bg-left-bottom${query}{background-position:left bottom;}
.bg-left-top${query}{background-position:left top;}
.bg-right${query}{background-position:right;}
.bg-right-bottom${query}{background-position:right bottom;}
.bg-right-top${query}{background-position:right top;}
.bg-top${query}{background-position:top;}
.bg-repeat${query}{background-repeat:repeat;}
.bg-no-repeat${query}{background-repeat:no-repeat;}
.bg-repeat-x${query}{background-repeat:repeat-x;}
.bg-repeat-y${query}{background-repeat:repeat-y;}
.bg-repeat-round${query}{background-repeat:round;}
.bg-repeat-space${query}{background-repeat:space;}
.bg-auto${query}{background-size:auto;}
.bg-cover${query}{background-size:cover;}
.bg-contain${query}{background-size:contain;}
.bg-unset${query}{background-color:unset;}
.bg-clip-border${query}{background-clip:border-box;}
.bg-clip-content${query}{background-clip:content-box;}
.bg-clip-padding${query}{background-clip:padding-box;}
.bg-clip-text${query}{
  background-clip:text;
  -webkit-background-clip:text;
  color:transparent;
}
`
}

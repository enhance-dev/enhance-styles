export default function background({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Background ***/
.bg-fixed${breakpoint}{background-attachment:fixed;}
.bg-local${breakpoint}{background-attachment:local;}
.bg-scroll${breakpoint}{background-attachment:scroll;}
.bg-bottom${breakpoint}{background-position:bottom;}
.bg-center${breakpoint}{background-position:center;}
.bg-left${breakpoint}{background-position:left;}
.bg-left-bottom${breakpoint}{background-position:left bottom;}
.bg-left-top${breakpoint}{background-position:left top;}
.bg-right${breakpoint}{background-position:right;}
.bg-right-bottom${breakpoint}{background-position:right bottom;}
.bg-right-top${breakpoint}{background-position:right top;}
.bg-top${breakpoint}{background-position:top;}
.bg-repeat${breakpoint}{background-repeat:repeat;}
.bg-no-repeat${breakpoint}{background-repeat:no-repeat;}
.bg-repeat-x${breakpoint}{background-repeat:repeat-x;}
.bg-repeat-y${breakpoint}{background-repeat:repeat-y;}
.bg-repeat-round${breakpoint}{background-repeat:round;}
.bg-repeat-space${breakpoint}{background-repeat:space;}
.bg-auto${breakpoint}{background-size:auto;}
.bg-cover${breakpoint}{background-size:cover;}
.bg-contain${breakpoint}{background-size:contain;}
.bg-unset${breakpoint}{background-color:unset;}
.bg-clip-border${breakpoint}{background-clip:border-box;}
.bg-clip-content${breakpoint}{background-clip:content-box;}
.bg-clip-padding${breakpoint}{background-clip:padding-box;}
.bg-clip-text${breakpoint}{
  background-clip:text;
  -webkit-background-clip:text;
  color:transparent;
}
`
}

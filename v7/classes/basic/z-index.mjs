export default function zIndex({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Z-Index ***/
.z-auto${breakpoint}{z-index:auto;}
.z1${breakpoint}{z-index:1;}
.z0${breakpoint}{z-index:0;}
.z-1${breakpoint}{z-index:-1;}
`
}

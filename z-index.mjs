export default function ZIndex(query='') {
  return /*css*/`
/*** Z-Index ***/
.z-auto${query}{z-index:auto;}
.z1${query}{z-index:1;}
.z0${query}{z-index:0;}
.z-1${query}{z-index:-1;}
`
}

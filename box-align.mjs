export default function flex(query='') {
  return /*css*/`
/*** Box alignment ***/
.align-items-stretch${query}{align-items:stretch;}
.align-items-center${query}{align-items:center;}
.align-items-start${query}{align-items:start;}
.align-items-end${query}{align-items:end;}
.align-items-self-start${query}{align-items:self-start;}
.align-items-self-end${query}{align-items:self-end;}
.align-items-flex-start${query}{align-items:flex-start;}
.align-items-flex-end${query}{align-items:flex-end;}
.align-items-baseline${query}{align-items:baseline;}

.align-content-stretch${query}{align-content:stretch;}
.align-content-center${query}{align-content:center;}
.align-content-start${query}{align-content:start;}
.align-content-end${query}{align-content:end;}
.align-content-flex-start${query}{align-content:flex-start;}
.align-content-flex-end${query}{align-content:flex-end;}
.align-content-baseline${query}{align-content:baseline;}
.align-content-between${query}{align-content:space-between;}
.align-content-around${query}{align-content:space-around;}
.align-content-evenly${query}{align-content:space-evenly;}

.align-self-stretch${query}{align-self:stretch;}
.align-self-auto${query}{align-self:auto;}
.align-self-center${query}{align-self:center;}
.align-self-start${query}{align-self:start;}
.align-self-end${query}{align-self:end;}
.align-self-self-start${query}{align-self:self-start;}
.align-self-self-end${query}{align-self:self-end;}
.align-self-flex-start${query}{align-self:flex-start;}
.align-self-flex-end${query}{align-self:flex-end;}
.align-self-baseline${query}{align-self:baseline;}

.justify-content-stretch${query}{justify-content:stretch;}
.justify-content-center${query}{justify-content:center;}
.justify-content-start${query}{justify-content:start;}
.justify-content-end${query}{justify-content:end;}
.justify-content-flex-start${query}{justify-content:flex-start;}
.justify-content-flex-end${query}{justify-content:flex-end;}
.justify-content-between${query}{justify-content:space-between;}
.justify-content-around${query}{justify-content:space-around;}
.justify-content-evenly${query}{justify-content:space-evenly;}

.justify-items-stretch${query}{justify-items:stretch;}
.justify-items-center${query}{justify-items:center;}
.justify-items-start${query}{justify-items:start;}
.justify-items-end${query}{justify-items:end;}
.justify-items-flex-start${query}{justify-items:flex-start;}
.justify-items-flex-end${query}{justify-items:flex-end;}
.justify-items-self-start${query}{justify-items:self-start;}
.justify-items-self-end${query}{justify-items:self-end;}
.justify-items-baseline${query}{justify-items:baseline;}

.justify-self-stretch${query}{justify-self:stretch;}
.justify-self-center${query}{justify-self:center;}
.justify-self-start${query}{justify-self:start;}
.justify-self-end${query}{justify-self:end;}
.justify-self-flex-start${query}{justify-self:flex-start;}
.justify-self-flex-end${query}{justify-self:flex-end;}
.justify-self-self-start${query}{justify-self:self-start;}
.justify-self-self-end${query}{justify-self:self-end;}
.justify-self-baseline${query}{justify-self:baseline;}

.place-content-stretch${query}{place-content:stretch;}
.place-content-center${query}{place-content:center;}
.place-content-start${query}{place-content:start;}
.place-content-end${query}{place-content:end;}
.place-content-flex-start${query}{place-content:flex-start;}
.place-content-flex-end${query}{place-content:flex-end;}
.place-content-between${query}{place-content:space-between;}
.place-content-around${query}{place-content:space-around;}
.place-content-evenly${query}{place-content:space-evenly;}

.place-items-stretch${query}{place-items:stretch;}
.place-items-center${query}{place-items:center;}
.place-items-start${query}{place-items:start;}
.place-items-end${query}{place-items:end;}
.place-items-self-start${query}{place-items:self-start;}
.place-items-self-end${query}{place-items:self-end;}
.place-items-flex-start${query}{place-items:flex-start;}
.place-items-flex-end${query}{place-items:flex-end;}
.place-items-baseline${query}{place-items:baseline;}

.place-self-stretch${query}{place-self:stretch;}
.place-self-center${query}{place-self:center;}
.place-self-start${query}{place-self:start;}
.place-self-end${query}{place-self:end;}
.place-self-flex-start${query}{place-self:flex-start;}
.place-self-flex-end${query}{place-self:flex-end;}
.place-self-self-start${query}{place-self:self-start;}
.place-self-self-end${query}{place-self:self-end;}
.place-self-baseline${query}{place-self:baseline;}
`
}

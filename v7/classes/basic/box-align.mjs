export default function boxAlign({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Box alignment ***/
.align-items-stretch${breakpoint}{align-items:stretch;}
.align-items-center${breakpoint}{align-items:center;}
.align-items-start${breakpoint}{align-items:start;}
.align-items-end${breakpoint}{align-items:end;}
.align-items-self-start${breakpoint}{align-items:self-start;}
.align-items-self-end${breakpoint}{align-items:self-end;}
.align-items-flex-start${breakpoint}{align-items:flex-start;}
.align-items-flex-end${breakpoint}{align-items:flex-end;}
.align-items-baseline${breakpoint}{align-items:baseline;}

.align-content-stretch${breakpoint}{align-content:stretch;}
.align-content-center${breakpoint}{align-content:center;}
.align-content-start${breakpoint}{align-content:start;}
.align-content-end${breakpoint}{align-content:end;}
.align-content-flex-start${breakpoint}{align-content:flex-start;}
.align-content-flex-end${breakpoint}{align-content:flex-end;}
.align-content-baseline${breakpoint}{align-content:baseline;}
.align-content-between${breakpoint}{align-content:space-between;}
.align-content-around${breakpoint}{align-content:space-around;}
.align-content-evenly${breakpoint}{align-content:space-evenly;}

.align-self-stretch${breakpoint}{align-self:stretch;}
.align-self-auto${breakpoint}{align-self:auto;}
.align-self-center${breakpoint}{align-self:center;}
.align-self-start${breakpoint}{align-self:start;}
.align-self-end${breakpoint}{align-self:end;}
.align-self-self-start${breakpoint}{align-self:self-start;}
.align-self-self-end${breakpoint}{align-self:self-end;}
.align-self-flex-start${breakpoint}{align-self:flex-start;}
.align-self-flex-end${breakpoint}{align-self:flex-end;}
.align-self-baseline${breakpoint}{align-self:baseline;}

.justify-content-stretch${breakpoint}{justify-content:stretch;}
.justify-content-center${breakpoint}{justify-content:center;}
.justify-content-start${breakpoint}{justify-content:start;}
.justify-content-end${breakpoint}{justify-content:end;}
.justify-content-flex-start${breakpoint}{justify-content:flex-start;}
.justify-content-flex-end${breakpoint}{justify-content:flex-end;}
.justify-content-between${breakpoint}{justify-content:space-between;}
.justify-content-around${breakpoint}{justify-content:space-around;}
.justify-content-evenly${breakpoint}{justify-content:space-evenly;}

.justify-items-stretch${breakpoint}{justify-items:stretch;}
.justify-items-center${breakpoint}{justify-items:center;}
.justify-items-start${breakpoint}{justify-items:start;}
.justify-items-end${breakpoint}{justify-items:end;}
.justify-items-flex-start${breakpoint}{justify-items:flex-start;}
.justify-items-flex-end${breakpoint}{justify-items:flex-end;}
.justify-items-self-start${breakpoint}{justify-items:self-start;}
.justify-items-self-end${breakpoint}{justify-items:self-end;}
.justify-items-baseline${breakpoint}{justify-items:baseline;}

.justify-self-stretch${breakpoint}{justify-self:stretch;}
.justify-self-center${breakpoint}{justify-self:center;}
.justify-self-start${breakpoint}{justify-self:start;}
.justify-self-end${breakpoint}{justify-self:end;}
.justify-self-flex-start${breakpoint}{justify-self:flex-start;}
.justify-self-flex-end${breakpoint}{justify-self:flex-end;}
.justify-self-self-start${breakpoint}{justify-self:self-start;}
.justify-self-self-end${breakpoint}{justify-self:self-end;}
.justify-self-baseline${breakpoint}{justify-self:baseline;}

.place-content-stretch${breakpoint}{place-content:stretch;}
.place-content-center${breakpoint}{place-content:center;}
.place-content-start${breakpoint}{place-content:start;}
.place-content-end${breakpoint}{place-content:end;}
.place-content-flex-start${breakpoint}{place-content:flex-start;}
.place-content-flex-end${breakpoint}{place-content:flex-end;}
.place-content-between${breakpoint}{place-content:space-between;}
.place-content-around${breakpoint}{place-content:space-around;}
.place-content-evenly${breakpoint}{place-content:space-evenly;}

.place-items-stretch${breakpoint}{place-items:stretch;}
.place-items-center${breakpoint}{place-items:center;}
.place-items-start${breakpoint}{place-items:start;}
.place-items-end${breakpoint}{place-items:end;}
.place-items-self-start${breakpoint}{place-items:self-start;}
.place-items-self-end${breakpoint}{place-items:self-end;}
.place-items-flex-start${breakpoint}{place-items:flex-start;}
.place-items-flex-end${breakpoint}{place-items:flex-end;}
.place-items-baseline${breakpoint}{place-items:baseline;}

.place-self-stretch${breakpoint}{place-self:stretch;}
.place-self-center${breakpoint}{place-self:center;}
.place-self-start${breakpoint}{place-self:start;}
.place-self-end${breakpoint}{place-self:end;}
.place-self-flex-start${breakpoint}{place-self:flex-start;}
.place-self-flex-end${breakpoint}{place-self:flex-end;}
.place-self-self-start${breakpoint}{place-self:self-start;}
.place-self-self-end${breakpoint}{place-self:self-end;}
.place-self-baseline${breakpoint}{place-self:baseline;}
`
}

export default function tracking({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Tracking ***/
.tracking3${breakpoint}{letter-spacing: 0.1em;}
.tracking2${breakpoint}{letter-spacing: 0.05em;}
.tracking1${breakpoint}{letter-spacing: 0.025em;}
.tracking0${breakpoint}{letter-spacing: 0;}
.tracking-1${breakpoint}{letter-spacing: -0.025em;}
.tracking-2${breakpoint}{letter-spacing: -0.05em;}
  `
}

export default function tracking(query) {
  return /*css*/`
/*** Tracking ***/
.tracking3${query}{letter-spacing: 0.1em;}
.tracking2${query}{letter-spacing: 0.05em;}
.tracking1${query}{letter-spacing: 0.025em;}
.tracking0${query}{letter-spacing: 0;}
.tracking-1${query}{letter-spacing: -0.025em;}
.tracking-2${query}{letter-spacing: -0.05em;}
  `
}

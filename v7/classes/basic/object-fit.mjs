export default function objectFit({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Object Fit ***/
.object-contain${breakpoint}{object-fit:contain;}
.object-cover${breakpoint}{object-fit:cover;}
.object-fill${breakpoint}{object-fit:fill;}
.object-none${breakpoint}{object-fit:none;}
.object-scale-down${breakpoint}{object-fit:scale-down;}
`
}

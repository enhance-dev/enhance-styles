export default function ObjectFit(query='') {
  return /*css*/`
/* OBJECT FIT */
.object-contain${query}{object-fit:contain;}
.object-cover${query}{object-fit:cover;}
.object-fill${query}{object-fit:fill;}
.object-none${query}{object-fit:none;}
.object-scale-down${query}{object-fit:scale-down;}
`
}

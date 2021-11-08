const ceviche = [
  {
    indice: 1,
    titulo: "pescado"
  },
  {
    indice: 2,
    titulo: "mariscos"
  },
  {
    indice: 3,
    titulo: "cebolla"
  }
];

//filter methodt***********************

//tutorial
const filtrar = ceviche.filter(function (ing, index) {
  const ingredeintes = ing.titulo.includes('e');
  return ingredeintes;
});

//es16
const myFilter = ceviche.filter(ing => ing.titulo.includes('m'));

//es15
var myFilterEs15 = ceviche.filter(function (ing) {
  const found = ing.titulo.includes('a');
  return found;
})



//sort methotd************************+
//tutorial
ceviche.sort(function (a, b) {
  if (a.titulo > b.titulo) {
    return 1;
  }
  if (a.titulo < b.titulo) {
    return -1;
  }
  return 0;
});

//es16
ceviche.sort((a, b)=>{
  if (a.titulo > b.titulo) {
    return 1;
  }
  if (a.titulo < b.titulo) {
    return -1;
  }
  return 0;
});

console.log(ceviche);





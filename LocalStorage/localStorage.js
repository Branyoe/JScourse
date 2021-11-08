// //setItem method************************
// localStorage.setItem("item", "pescado");
// localStorage.setItem("item2", "pollo");
// localStorage.setItem("item3", "ajo");

// //getItem method***********************
// console.log(localStorage.getItem("item"));
// console.log(localStorage.getItem("item2"));
// console.log(localStorage.getItem("item3"));

// //removeItem method********************
// localStorage.removeItem('item');

// console.log(localStorage.getItem("item"));
// console.log(localStorage.getItem("item2"));
// console.log(localStorage.getItem("item3"));

// //clear method*****************************
// localStorage.clear();
// console.log(localStorage.getItem("item"));
// console.log(localStorage.getItem("item2"));
// console.log(localStorage.getItem("item3"));



//JSON Notation****************************

const usuario = {
  nombre: 'Pamela',
  edad: '18'
}

//stringify method
const usuarioString = JSON.stringify(usuario);

console.log(usuario); //literal object
console.log(usuarioString); //stringify object

//parse method
const usuarioParse = JSON.parse(usuarioString);

console.log(usuarioString);
console.log(usuarioParse);

//save JSON in localStorage
const object1 = { //object define in literal form
  titulo: "avellana",
  codigo: 23
}

localStorage.setItem("object1", JSON.stringify(object1));//save object in string form
console.log(localStorage.getItem("object1"));//get object in string form

const object1Parse = JSON.parse(localStorage.getItem("object1"));//transform a stringify Object to a literal Object
console.log(object1Parse);

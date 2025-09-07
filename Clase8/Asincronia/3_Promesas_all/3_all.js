
//Codigo no funcional
//Promise.all genera 1 promesa, en base a un array de promesas.

var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 111, "Valor retornado de promesa 1");
});

var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 222, "Valor retornado de promesa 2");
});

var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 333, "Valor retornado de promesa 3");
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); 
});


//Codigo no funcional
//Promise.all genera 1 promesa, en base a un array de promesas.

//setTimeout(callback,demora,param1,param2 ...)

var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Valor retornado de promesa 1");
});

var p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, "Valor retornado de promesa 2");
});
//Esta espera 2000ms y rechaza explotando pq no le puse catch

var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Valor retornado de promesa 3");
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); 
});
//Esta espera 2000ms y rechaza explotando pq no le puse catch
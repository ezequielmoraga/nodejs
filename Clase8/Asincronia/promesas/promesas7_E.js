/*
async : hace que una funcion RETORNE una promesa
await: hace que una funcion ESPERE por una promesa



*/

console.log("Inicio programa");
let prom=Promise.reject(22);//crea promesa resulta inmediatamente
prom
.then(valor=>{console.log(`La promesa se resolvio con el valor: ${valor}`)})
.catch(valor=>{console.log(`La promesa se rechazo con el valor: ${valor}`)})
console.log("Fin del programa");






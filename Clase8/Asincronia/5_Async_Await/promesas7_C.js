/*
async : hace que una funcion RETORNE una promesa
await: hace que una funcion ESPERE por una promesa



*/

async function miFuncionQueRetornaPromesas() {
    return "Soy una promesa";
  }



//Las async retornan el valor envuelto en una promesa

console.log("Inicio programa");
miFuncionQueRetornaPromesas().then(()=>{console.log("Finalizo la espera")});
console.log("Fin del programa");
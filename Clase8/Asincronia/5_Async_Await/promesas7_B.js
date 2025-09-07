/*
async : hace que una funcion RETORNE una promesa
await: hace que una funcion ESPERE por una promesa



*/


//version con await

async function miFuncionQueRetornaPromesas() {
    return "Soy una promesa";
  }



//Las async retornan el valor envuelto en una promesa

async function miEsperadora()
{
  await miFuncionQueRetornaPromesas() ;
  console.log("Finalizo la espera");
}

console.log("Inicio programa");
miEsperadora();
console.log("Fin del programa");
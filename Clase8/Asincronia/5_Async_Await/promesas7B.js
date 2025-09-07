/*
async : hace que una funcion RETORNE una promesa
await: hace que una funcion ESPERE por una promesa



*/

async function miFuncionQueRetornaPromesas() {
  return new Promise((resolve, reject) => {
    resolve("Soy una promesa");
  });
  }




console.log(miFuncionQueRetornaPromesas());
/*
async : hace que una funcion RETORNE una promesa
await: hace que una funcion ESPERE por una promesa
*/

//await lo usamos dentro de una funcion async

//PENDIENTE

async function miFuncionQueRetornaPromesas() {
   let mipromesa = new Promise( function (resolve)
   {
      setTimeout(function() {console.log("Procesamiento finalizado OK");},2000);
   });

  }




miFuncionQueRetornaPromesas();
console.log("Fin programa");
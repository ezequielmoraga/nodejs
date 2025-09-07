/*
async : hace que una funcion RETORNE una promesa
await: hace que una funcion ESPERE por una promesa
*/

//await lo usamos dentro de una funcion async



async function miFuncionQueRetornaPromesas() {
   let mipromesa = new Promise( function (resolve)
   {
      setTimeout( (function (resolve) { console.log("Trabajo Finalizado"); })  ,2000);
      console.log("dentro del procesamiento de la promesa");
   });
   return(mipromesa);
  }

  //la ejecucion del resolve libera el await

async function llama_y_espera()
{
   console.log("Inicio espera");
   await miFuncionQueRetornaPromesas();//al caer en el await se freeza solo esta funcion llama_y_espera
    console.log("Fin espera");
}

llama_y_espera();
console.log("Soy un mensaje");
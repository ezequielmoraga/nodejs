/*
async : hace que una funcion RETORNE una promesa
await: hace que una funcion ESPERE por una promesa
*/

//await lo usamos dentro de una funcion async



 function miFuncionQueRetornaPromesas() {
   let mipromesa = new Promise( function (resolve)
   {
      setTimeout( resolve  ,2000);
      console.log("dentro del procesamiento de la promesa");
   });
   return(mipromesa);
  }

  //la ejecucion del resolve libera el await

async function llama_y_espera()
{
   console.log("Inicio espera 1");
   await miFuncionQueRetornaPromesas();//al caer en el await se freeza solo esta funcion llama_y_espera
   console.log("Inicio espera 2");
   await miFuncionQueRetornaPromesas();//al caer en el await se freeza solo esta funcion llama_y_espera
   console.log("Inicio espera 3");
   await miFuncionQueRetornaPromesas();//al caer en el await se freeza solo esta funcion llama_y_espera
}

llama_y_espera();
console.log("Soy un mensaje   1");
console.log("Soy un mensaje      2");
console.log("Soy un mensaje         3");

//Aca se ve una ejecucion secuencializada "paralela" al principal que continuo
//cuando finaliza la promesa y se invoca resolve, se destraba el await
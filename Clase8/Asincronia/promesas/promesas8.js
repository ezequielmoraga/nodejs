/*
async : hace que una funcion RETORNE una promesa
await: hace que una funcion ESPERE por una promesa



*/

async function miFuncionQueRetornaPromesas() {
  let numero=Math.floor(Math.random() * 10);
  if( ! ( numero%2 )  )
  {//es par
     return(`El numero par fue ${numero}`);//indica la resolucion correcta
  } else
  {
     throw(`El numero impar fue ${numero}`);//indica el fallo
  }
  }




miFuncionQueRetornaPromesas()
.then(function(value) { console.log("Mensaje devuelto por ejecucion CORRECTA: "+value); })
.catch(function(error) { console.log("Mensaje devuelto por ejecucion INCORRECTA: "+error); });
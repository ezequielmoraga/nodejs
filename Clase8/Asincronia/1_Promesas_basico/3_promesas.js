/*Creo promesa como objeto usando constructor*/




const fs = require('fs');

function textFile(archivoNombre) {
    return new Promise(resolve => {
      //OJO SINCRONA
      datos=fs.readFileSync(archivoNombre,'utf-8');//OJO SINCRONICA
      resolve(datos);
    });
  }
  
  setImmediate(()=>{console.log("Hola hola")});
  textFile("Revue-technique-Ford-Fiesta-1999-GB.pdf").then(console.log);
  //buscar un archivo un poco mas corto
  setImmediate(()=>{console.log("Chau Chau")});
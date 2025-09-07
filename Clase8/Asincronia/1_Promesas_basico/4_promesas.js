/*Creo promesa como objeto usando constructor*/




const fs = require('fs');

function textFile(archivoNombre) {
    return new Promise(resolve => {
      //Esta variante de readFile es asincrona, cuando termina de leer, invoca
      //la callback
      fs.readFile(archivoNombre,'utf-8',(err,datos)=>{
        //console.log(`lectura finalizadas ${datos} `);
        //no presicso imprmirlo aca
        resolve(datos);
      }
    );
    });
  }
  
  setImmediate(()=>{console.log("Hola hola")});
  textFile("snic-provincias.csv").then(console.log);
  //buscar un archivo un poco mas corto
  setImmediate(()=>{console.log("Chau Chau")});

  //Se ve la ejecucion de ambos set Inmmediate
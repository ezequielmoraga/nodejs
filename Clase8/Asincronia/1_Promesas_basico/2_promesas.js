/*Creo promesa como objeto usando constructor*/

//Ejemplo NO FUNCIONAL

function textFile(filename) {
    return new Promise(resolve => {
      readTextFile(filename, text => resolve(text));
    });
  }
  
  textFile("plans.txt").then(console.log);
const fs = require('node:fs');

function someAsyncOperation(callback) {
  // Tarda XYZms en terminar
  fs.readFile('/path/to/file',callback);
}//Simula la lectura de un archivo invocando una callback 

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`Pasaron ${delay}ms desde que me planificaron`);
}, 100);

// hacer someAsyncOperation tarda xyz tiempo
someAsyncOperation(() => {
  const startCallback = Date.now();

  //demorar 10ms
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});

//Muestra que demora mas de 100  en correr setTimeOut

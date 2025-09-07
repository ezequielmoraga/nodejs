// timeout_vs_immediate.js
const fs = require('node:fs');
fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});

//en este conexto (acceso i/o) setInmediate va primero

//setImmediate va a ir antes que cualquier timer en un ciclo i/o
//indep de la cantidad de timers
//Como no encuentra la funcion hay que importar modulo aca y exportarla desde alla
//require importa un modulo (otros utilizan import)

//const saluda = require("./saludador.js"); //para importar todo

const {saludadoraHolaMundo} = require("./saludador.js"); //para importar en especifico

//console.log(saluda.saludador("saelmi"));

console.log(saludadoraHolaMundo());

//Ahora saludadora no esta definido
//No fue includido en el require por la sintaxis de 
//desestructuracion
console.log(saludadora("saelmi"));



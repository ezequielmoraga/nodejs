//Como no encuentra la funcion hay que importar modulo aca y exportarla desde alla
//require importa un modulo (otros utilizan import)

const saluda = require("./saludador.js");

console.log(saluda.saludador("saelmi"));
console.log(saluda.saludadoraHolaMundo());

//console.log(saludadora("saelmi"));
//sigue fallando porque no se especifica de donde 
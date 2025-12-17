//Como no encuentra la funcion hay que importar modulo aca y exportarla desde alla
//require importa un modulo (otros utilizan import)

//const saluda = require("./saludador.js"); //para importar todo

const {saludadora, saludadoraHolaMundo} = require("./saludador.js"); //para importar en especifico
//asi se selecionan solo los modulos especificos a importar


//console.log(saluda.saludador("saelmi"));

console.log(saludadoraHolaMundo());

//incluido en la sintaxis de desestructuracion const { bla1 , bla2}
console.log(saludadora("saelmi"));



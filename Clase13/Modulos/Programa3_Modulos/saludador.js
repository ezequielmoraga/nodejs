
//para usarla afuera hay que exportar funcion o variables.



function saludadora (nombre) 
{
    return `Hola ${nombre} `;
}





module.exports.saludadora = saludadora;

// module.exports  tiene todo lo exportado es objeto

console.log(module.exports);// es vacio si no exportas
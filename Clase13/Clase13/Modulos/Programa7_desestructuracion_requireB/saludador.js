
//para usarla afuera hay que exportar funcion o variables.



function saludadora (nombre) 
{
    return `Hola ${nombre} `;
}


function saludadoraHolaMundo () 
{
    return 'hola mundo';
}


//asi agrego modulo a exportar desde aca
//la propiedad del objeto no es obligatorio mismo nombre


module.exports ={ 
saludadora : saludadora,
saludadoraHolaMundo : saludadoraHolaMundo
};

// module.exports  tiene todo lo exportado es objeto

console.log(module.exports);// es vacio si no exportas
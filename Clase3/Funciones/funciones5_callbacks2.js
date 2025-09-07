//funcion que recibe una funcion por parametro

//ese parametro funcion, se la llama funcion callback


//Aca la callback llega a la funcion que la va a invocar, pero no junto con los datos.
//Los datos que va a usar le son entregados dentro de la invocadora


function calculadora(operacion)
{   const valor1=2;
    const valor2=3;
    resu=operacion(valor1,valor2);
    return(resu);
}

console.log(calculadora(  (a,b) => {  
    return (a**b )

}));


console.log(`La potenciacion  es ${calculadora(
     (a,b) => {  
        return (a**b);
    }) }`);


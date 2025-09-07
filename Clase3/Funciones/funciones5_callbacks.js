//funcion que recibe una funcion por parametro

//ese parametro funcion, se la llama funcion callback


function sumadora(a,b)
{
    return(a+b)
}

function restadora(a,b)
{
    return(a-b)
}

const multiplicadora = (a,b)=> a*b;

function calculadora(operacion,valor1,valor2)
{
    resu=operacion(valor1,valor2);
    return(resu);
}




console.log(calculadora(sumadora,4,5));
console.log(`La suma es ${calculadora(sumadora,4,5) }`);

console.log(calculadora(restadora,4,5));
console.log(`La resta es ${calculadora(restadora,4,5) }`);

console.log(calculadora(multiplicadora,4,5));
console.log(`La multiplicacion  es ${calculadora(multiplicadora,4,5) }`);

console.log(calculadora( ( (a,b) =>   a/b) ,4,5));
console.log(`La division  es ${calculadora(( (a,b) =>   a/b),4,5) }`);

console.log(calculadora(  (a,b) => {  
    return (a**b )
}  
 ,2,3));
 
console.log(`La potenciacion  es ${calculadora(
     (a,b) => {  
        return (a**b);
    },2,3) }`);


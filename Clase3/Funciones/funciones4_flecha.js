
//funcion flecha

const calcularAreaCuadrado = (a,b)=>
{
    return a*b;  
} 

const calcularAreaCuadradoB = (a,b)=> a*b; //si es fila sola no usa return



console.log(calcularAreaCuadrado(2,3));
console.log(calcularAreaCuadradoB(2,4));


console.log( ( (a,b) =>  {return (a*b);}) (2,5)  );

console.log( ( (a,b) =>   a*b) (2,6)  );
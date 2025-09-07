//Templates Strings

const radio=3;


const total= `El area es ${Math.PI*radio*radio} `;
console.log(total);

const total2= `El area es ${Math.PI*Math.pow(radio,2)} `;
console.log(total2);

const total3= `El area es ${ (Math.PI*Math.pow(radio,2)).toFixed(2) } `;
console.log(total3);
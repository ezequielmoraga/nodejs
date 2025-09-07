
//ECMAScript 2015 is also known as ES6 and ECMAScript 6.  
//let declarar antes de usar, vive en su scope, no redeclarable en mismo scope


let v1='si usar';// preferible

if (true)
{
   let  v1='saelmi';// esta es una nueva variable con el mismo nombre pero en otro scope
   console.log(v1);
}



console.log(v1);





let num=Promise.resolve(15);

num.then(valor => console.log(`Recibi valor ${valor}`));

//Cuando la promesa se resuelva se invoca a then, con el valor determinado, 
// y se invoca a la funcion =>
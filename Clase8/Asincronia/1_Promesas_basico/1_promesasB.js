
let num=Promise.reject(15);

num.then(valor => console.log(`Recibi valor ${valor}`)).catch(error=> console.log(`Fallo error ${error}`));

//Cuando la promesa se resuelva se invoca a then, con el valor determinado, 
// y se invoca a la funcion =>
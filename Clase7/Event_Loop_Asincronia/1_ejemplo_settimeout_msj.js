function saludar()
{
    console.log("Hola");
}


setTimeout(saludar, 3000);

//Saludar es un mensaje para la cola
//3000 tiempo minimo que espera antes de encolar mensaje

/*Si no hay otro mensaje en la cola,
 y el stack esta vacío 
 el mensaje se procesa inmediatamente luego del delay

 Si  hay otros mensajes, 
 se esperara que los otros terminen,
 antes de hacer el mensaje de mi setTimeout()

https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

 
 */
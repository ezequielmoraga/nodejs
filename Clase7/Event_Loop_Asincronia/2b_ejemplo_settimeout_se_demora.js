/*Este programa demuestra que setTiemout
no se ejecuta directamente luego de que pase el tiempo
sino cuando se libere la cola y stack
*/

/*Saca foto a timer temporal
instala mensaje en cola
Arranca ciclo while 
    en ciclo while cuando se producza una diferencia de 2segundos mostrara mensaje.

Al ejecutarse el setTimeout paso mas tiempo que 500ms
*/

const seconds = new Date().getTime() / 1000;

setTimeout(() => {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
}, 500);

while (true) {
  if (new Date().getTime() / 1000 - seconds >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}



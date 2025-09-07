/*
Arranca ciclo while 
    en ciclo while cuando se producza una diferencia de 2segundos mostrara mensaje.
*/

let seconds = new Date().getTime() / 1000;
let cuentavueltas = 0;


while (true) {
  if (new Date().getTime() / 1000 - seconds >= 2) {
    console.log(`Pasaron 2 segundos, estoy en al vuelta ${cuentavueltas}`);
    seconds = new Date().getTime() / 1000;//saco nueva foto al timer
    cuentavueltas++;
  }
}



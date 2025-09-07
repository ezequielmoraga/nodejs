(() => {
  console.log("INICIO");

  setTimeout(() => {
    console.log("Mensaje echo en callback 1 ");
  }); // has a default time value of 0

  console.log("Hola, soy un mensaje");

  setTimeout(() => {
    console.log("Mensaje echo en callback 2 ");
  }, 0);

  console.log("FIN");
})();


/*setTImeout, tiene q esperar que se termine la cola adelante de el para ser atendido
A pesar de que el tiempo sera 0*/

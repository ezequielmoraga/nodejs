new Promise((_, reject) => reject(new Error("Fail")))
  .then(value => console.log("Handler 1:", value))
  .catch(reason => {
    console.log("Caught failure " + reason);
    return "nothing";
  })
  .then(value => console.log("Handler 2:", value));
// → Caught failure Error: Fail
// → Handler 2: nothing

//El Objeto promesa, retorna un rechazo del tipo objeto Error
//El then1 lo deja seguir de largo porque no fue exitoso.
//El catch lo ataja, e imprime el error, a su vez como es error el error es una promesa
//El then2 atrapa esa promesa e imprime el valor enviado..
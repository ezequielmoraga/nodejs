//No esta el catch en el stack de una callaback para atajar una excepcion

//la callback pasada a setTime out es ()=>{  }
try {
    setTimeout(() => {
      throw new Error("Woosh");
    }, 20);
  } catch (e) {
    // This will not run
    console.log("Caught", e);
  }

  //No se atrapa la expcecion pq no hay un catch para atajarla
  //No hay un catch porque la callback tiene su stack vacio.
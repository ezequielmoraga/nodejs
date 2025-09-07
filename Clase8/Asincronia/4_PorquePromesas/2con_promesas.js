

var p1 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "Valor retornado de promesa 1 en fallo");
  });

  p1.then((values_OK) => {
    console.log(`Resulto OK ${values_OK}`);    
    } 
  ).catch(
    (values_MAL) => {
        console.log(`Resulto MAL ${values_MAL}`);
    }
  );
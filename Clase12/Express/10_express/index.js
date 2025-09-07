const express = require('express');
const app = express();
const port = 3000;


//curl -X GET  127.0.0.1:3000/Choferes
//No se proporciono licencia

//curl -X GET  127.0.0.1:3000/Choferes/123
//Licencia 123


// curl -X GET  127.0.0.1:3000/Choferes/pedro
//Licencia: pedro

// curl -X GET  127.0.0.1:3000/Choferes/pedro/ramirez
//Ruta: pedro/ramirez

// curl -X GET  127.0.0.1:3000/Choferes/pedro/ramirez/2002
//Ruta: pedro/ramirez/2002m

//curl -X GET  127.0.0.1:3000/Chofer/B2-37
//Licencia: B2, Edad: 37

//? puede estar o no

app.get('/Choferes/:licencia?', (req, res) => {
  if (req.params.licencia) {
    res.send(`Licencia: ${req.params.licencia}`);
  } else {
    res.send('No se proporcionó licencia');
  }
});

//cualquier cosa despues de *
app.get('/Choferes/*', (req, res) => {
  res.send(`Ruta: ${req.params[0]}`);
});

//Si o si hay que poner algo luego de /Choferes/ para que lo tome como parametro licencia
app.get('/Choferes/:licencia+', (req, res) => {
  res.send(`Licencia: ${req.params.licencia}`);
});

//Ruta con guion en los parámetros no se considera el - como parametro
app.get('/Chofer/:licencia-:edad', (req, res) => {
  res.send(`Licencia: ${req.params.licencia}, Edad: ${req.params.edad}`);
});


app.listen(port, () => {
  console.log(`App servidor con Express escuchando en puerto: ${port}`)
});





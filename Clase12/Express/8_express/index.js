const express = require('express');
const app = express();
const port = 3000;

//Segmento de ruta

//  /segmento1/segmento2/segmento3

//Uso de parametros de ruta   (recibidos en codigo como req.params)
//  :paramX  el valor luego de los :, sera pasado al parametro de ruta :paramX
//  *
//  ?
//  +


//Uso del parametro /Choferes/:licencia
//lo que sigue de /Choferes/abcdefghijkl   lo mete en licencia

//Se activa por
  // curl -X GET  127.0.0.1:3000/Choferes/licencia
  // curl -X GET  127.0.0.1:3000/Choferes/2
  // curl -X GET  127.0.0.1:3000/Choferes/juan


app.get('/Choferes/:licencia', (req, res) => {
    res.send(`Hiciste un get a /Choferes/${req.params.licencia} `);
    console.log(`El parametro de ruta  fue ${req.params.licencia}`);
  });




app.listen(port, () => {
  console.log(`App servidor con Express escuchando en puerto: ${port}`)
});





// Hiciste un get a / 

//curl -X GET  127.0.0.1:3000

//curl -X POST -H "Content-Type: application/json" 127.0.0.1:3000

//curl -X PUT  127.0.0.1:3000

//curl -X DELETE  127.0.0.1:3000
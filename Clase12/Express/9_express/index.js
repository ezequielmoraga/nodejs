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


//Uso del parametro /empleados/:id(\\d+)
// /empleados/numero_decimal
//Sino es numero falla

//Se activa por
  //curl -X GET  127.0.0.1:3000/empleados/2
  //curl -X GET  127.0.0.1:3000/empleados/222
  //curl -X GET  127.0.0.1:3000/empleados/2222

//Ignora
  // curl -X GET  127.0.0.1:3000/empleados/a
  // curl -X GET  127.0.0.1:3000/empleados/123a
  // curl -X GET  127.0.0.1:3000/empleados/1.3
  // curl -X GET  127.0.0.1:3000/empleados/1,4



app.get('/empleados/:id(\\d+)', (req, res) => {
    res.send(`Hiciste un get a /empleados/${req.params.id} `);
    console.log(`El parametro de ruta  fue ${req.params.id}`);
  });


app.listen(port, () => {
  console.log(`App servidor con Express escuchando en puerto: ${port}`)
});





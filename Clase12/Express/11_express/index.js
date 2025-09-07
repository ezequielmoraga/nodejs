const express = require('express');
const app = express();
const port = 3000;

//Dadas las siguientes rutas capturar el verbo get
//  /choferes 
//  /choferes/:nombre 
//  /choferes/:nombre/:apellido 
//  /choferes/:nombre/:apellido/:dni

//Preguntando por las partes de la ruta, si solo existe la buscada hace respeusta,
//si sobre algo pasa a la siguiente app.get()

// curl -X GET  127.0.0.1:3000/choferes
// curl -X GET  127.0.0.1:3000/choferes/pedro
// curl -X GET  127.0.0.1:3000/choferes/pedro/sanchez
// curl -X GET  127.0.0.1:3000/choferes/pedro/sanchez/22.222.222




app.get('/choferes', (req, res) => {
  res.send('Lista de choferes');
});

app.get('/choferes/:nombre', (req, res, next) => {
  if (req.params.nombre) {
    //Verifica si solo se tiene el nombre
    if (!req.params.apellido && !req.params.dni) {
      res.send(`Nombre: ${req.params.nombre}`);
    } else {
      next();
    }
  } else {
    next();
  }
});

app.get('/choferes/:nombre/:apellido', (req, res, next) => {
  if (req.params.apellido) {
    //Verifca si se tiene el nombre y apellido, pero no el dni
    if (!req.params.dni) {
      res.send(`Nombre: ${req.params.nombre}, Apellido: ${req.params.apellido}`);
    } else {
      next();
    }
  } else {
    next();
  }
});

app.get('/choferes/:nombre/:apellido/:dni', (req, res) => {
  res.send(`Nombre: ${req.params.nombre}, Apellido: ${req.params.apellido}, DNI: ${req.params.dni}`);
});





app.listen(port, () => {
  console.log(`App servidor con Express escuchando en puerto: ${port}`)
});





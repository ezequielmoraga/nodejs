const express = require('express');
const app = express();
const port = 3000;


// Ruteo sobre la ruta /r1

//Camino especifico para /r1/a 
//Camino especifico para /r1/b

//Camino especifico para /r2/c

let r1 = express.Router(); //Un router para cada ruta concatenada

r1.get('/a', (req,res)=>res.send('Ruta A') );
r1.get('/b', (req,res)=>res.send('Ruta B') );

let r2 = express.Router();
r2.get('/c', (req,res)=>res.send('Ruta C') );

app.use('/r1',r1);
app.use('/r2',r2);
//app.use instala la ruta que luego se concatena en xxxxx.get('/ruta_concatenada' ...

app.listen(port, () => {
  console.log(`App servidor con Express escuchando en puerto: ${port}`)
});




//Son respondidas
// curl -X GET  127.0.0.1:3000/r1/a
// curl -X GET  127.0.0.1:3000/r1/b
// curl -X GET  127.0.0.1:3000/r2/c



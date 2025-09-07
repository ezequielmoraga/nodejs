const express = require('express');
const app = express();
const port = 3000;


//Ruteo

//Aca hago solo GET para explicar el tema de ruteo

let r1_chofer = express.Router(); //Un router para cada ruta concatenada
let r2_vehiculo = express.Router(); //Un router para cada ruta concatenada
let r3_habilitacion = express.Router(); //Un router para cada ruta concatenada

r1_chofer.get('/crear', (req,res)=>res.send('De la ruta /chofer la subruta /crear') );
r1_chofer.get('/leer', (req,res)=>res.send('De la ruta /chofer la subruta /leer') );


r2_vehiculo.get('/crear', (req,res)=>res.send('De la ruta /vehiculo la subruta /crear') );
r2_vehiculo.get('/leer', (req,res)=>res.send('De la ruta /vehiculo la subruta /leer') );

r3_habilitacion.get('/crear', (req,res)=>res.send('De la ruta /habilitacion la subruta /crear') );
r3_habilitacion.get('/leer', (req,res)=>res.send('De la ruta /habilitacion la subruta /leer') );


app.use('/chofer',r1_chofer);
app.use('vehiculo',r2_vehiculo);
app.use('/habilitacion',r3_habilitacion);
//app.use instala la ruta que luego se concatena en xxxxx.get('/ruta_concatenada' ...

app.listen(port, () => {
  console.log(`App servidor con Express escuchando en puerto: ${port}`)
});




//Son respondidas
// curl -X GET  127.0.0.1:3000/chofer/crear
// curl -X GET  127.0.0.1:3000/chofer/leer

// curl -X GET  127.0.0.1:3000/vehiculo/crear
// curl -X GET  127.0.0.1:3000/vehiculo/leer

// curl -X GET  127.0.0.1:3000/habilitacion/crear
// curl -X GET  127.0.0.1:3000/habilitacion/leer



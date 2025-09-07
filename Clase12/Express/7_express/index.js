const express = require('express');
const app = express();
const port = 3000;

/*Si se hace un verbo de ruta exacta cae en el*/
/*Si se hace un verbo de ruta no exacta cae en el use*/


//Solo get de /
app.get('/', (req, res) => {
    res.send('Hiciste un get a / ');
  });
  //Solo post de /
  app.post('/', (req, res) => {
      res.send('Hiciste un post a / ');
    });
  //Solo put de /
  app.put('/', (req, res) => {
  res.send('Hiciste un put a / ');
  });
  //Solo delete de /
  app.delete('/', (req, res) => {
  res.send('Hiciste un delete a / ');
  });

app.use('/', (req, res) => {
  
  res.send(`Hiciste un ${req.method}  a una ruta no existente` );

  console.log(`Se hizo un ${req.method} en el path ${req.path} con el header ${req.headers} y el body ${req.body}`);

});




app.listen(port, () => {
  console.log(`App servidor con Express escuchando en puerto: ${port}`)
});





// Hiciste un get a / 

//curl -X GET  127.0.0.1:3000

//curl -X POST -H "Content-Type: application/json" 127.0.0.1:3000

//curl -X PUT  127.0.0.1:3000

//curl -X DELETE  127.0.0.1:3000
const express = require('express');
const app = express();
const port = 3000;

//all atiende cualquier verbo de la ruta exacta
app.all('/', (req, res) => {
  //res.send('Hiciste un VERBO HTTP  a / ');
  res.send(`Hiciste un ${req.method}  a /` );

  console.log(`Se hizo un ${req.method} en el path ${req.path} con el header ${req.headers} y el body ${req.body}`);

});







app.listen(port, () => {
  console.log(`App servidor con Express escuchando en puerto: ${port}`)
});



//~$ printf "GET /api  HTTP/1.0\r\n\r\n" | nc 127.0.0.1 3000
//Da error porque /api no esta definida



// printf "GET /  HTTP/1.0\r\n\r\n" | nc 127.0.0.1 3000

// HTTP/1.1 200 OK
// X-Powered-By: Express
// Content-Type: text/html; charset=utf-8
// Content-Length: 19
// ETag: W/"13-upRgr1TTI2+doYi27QXhVYWu5T0"
// Date: Wed, 22 May 2024 18:11:25 GMT
// Connection: close

// Hiciste un get a / 

//curl -X GET  127.0.0.1:3000

//curl -X POST -H "Content-Type: application/json" 127.0.0.1:3000

//curl -X PUT  127.0.0.1:3000

//curl -X DELETE  127.0.0.1:3000
const express = require('express');
const app = express();
const port = 3000;

//Mostar el error cuando no se hace el verbo contra /

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

const express = require('express');
const app = express();
const port = 3000;

//use escucha todas las solicitudes HTTP que empiezan con la ruta '/'
app.use('/', (req, res) => {
  res.send('Hola Mundo Express!');
  
  console.log("#################################");
  console.log("Solicitud VERBO HTTP:",req.method);
  console.log("Solicitud HEADERS:",req.headers);
  console.log("Solicitud BODY:",req.body);
  console.log("Solicitud PATH:",req.path);
  console.log("#################################");

});

app.listen(port, () => {
  console.log(`App servidor con Express escuchando en puerto: ${port}`)
});

/*Consultas realizadas y sus respuestas en el cliente*/

// CONSULTA:
    //curl -I 127.0.0.1:3000
//RTA:
    // HTTP/1.1 200 OK
    // X-Powered-By: Express
    // Content-Type: text/html; charset=utf-8
    // Content-Length: 19
    // ETag: W/"13-+BHyukjDkEIriq3Z0yPcQjo1vtg"
    // Date: Wed, 22 May 2024 17:46:42 GMT
    // Connection: keep-alive
    // Keep-Alive: timeout=5


// CONSULTA:
    //printf "GET /  HTTP/1.0\r\n\r\n" | nc 127.0.0.1 3000
//RTA:
    // HTTP/1.1 200 OK
    // X-Powered-By: Express
    // Content-Type: text/html; charset=utf-8
    // Content-Length: 19
    // ETag: W/"13-+BHyukjDkEIriq3Z0yPcQjo1vtg"
    // Date: Wed, 22 May 2024 17:47:53 GMT
    // Connection: close
    
    // Hola Mundo Express


// CONSULTA:
    //curl -X POST -d '{"nombre":"John", "edad":33}' -H "Content-Type: application/json" 127.0.0.1:3000

//RTA:
    //Hola Mundo Express!

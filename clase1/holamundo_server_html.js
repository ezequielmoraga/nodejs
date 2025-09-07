const http = require('node:http');


const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'html');
  //res.end('Hello World\n');
  res.end("<!DOCTYPE html>  <html>  <head>  <title>Soy una pagina</title>  </head>    <body> <h1>Hola mundo nodejs</h1> </body></html>");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



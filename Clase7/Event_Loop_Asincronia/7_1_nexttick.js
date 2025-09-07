const net = require('node:net');

const server = net.createServer();

server.on('connection', conn => {});

server.listen(8080);
server.on('listening', () => {});


/*listen() corre al principio del event loop,
 pero la listen callback se pone en setImmediate(). 
 El bind de puerto ocurre al toque,el evento procede a la fase poll ,
  hay una posibilidad, de que una conexión hubiera sido recibida,
 lanzando el evento de conexión antes del de listen.*/

 /*Solucion event emiter*/
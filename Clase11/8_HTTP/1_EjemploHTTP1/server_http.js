let mod_http=require('http');
let server = mod_http.createServer((request, response) => {

  //A cualquier solicitud se le devuelve lo mismo

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`<h1>Hello!</h1><p>You asked for <code>${request.url}</code></p>`);
  response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");

//127.0.0.1:8000/sarasa
//printf "GET / HTTP/1.0\r\n\r\n" | nc 127.0.0.1 8000
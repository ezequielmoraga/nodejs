let mod_http=require('http');
let server = mod_http.createServer((request, response) => {

  console.log("INICIO La URL requerida \n\n",request.url,"\nFin La URL requerida\n");
  console.log("INICIO La headers requerida \n\n",request.headers,"\nFin La headers requerida\n");
  console.log("INICIO La body requerida \n\n",request.body,"\nFin La body requerida\n");

  //A cualquier solicitud se le devuelve lo mismo
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>`);
  response.end();
  
});
server.listen(8000);
console.log("Listening! (port 8000)");

//127.0.0.1:8000/sarasa
//printf "GET / HTTP/1.0\r\n\r\n" | nc 127.0.0.1 8000
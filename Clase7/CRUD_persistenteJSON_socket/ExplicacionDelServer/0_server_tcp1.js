let net = require('net');

let port = (process.argv[2]|| 7777);


let server = net.createServer((socket)=>{
    socket.write("Bienvenido al Serividor echo\n");

    //evento data, se reciben datos desde el otro lado
    
    socket.on('data',function(data)
    {
        socket.write(data);
    });

});


server.listen(port);

console.log("Servidor echo corriendo en "+port);
let net = require('net');

let port = (process.argv[2]|| 7777);


let server = net.createServer((socket)=>{
    socket.write("Bienvenido al Serividor echo\n");

    //evento data, se reciben datos desde el otro lado
    
    socket.on('data',function(data)
    {
        //Data es un Buffer, array de bytes hexa si se imprime, hay que hacerlo string
        //https://www.w3schools.com/nodejs/met_buffer_tostring.asp
        //console.log(data);
        console.log(data.toString());

    });

});


server.listen(port);

console.log("Servidor echo corriendo en "+port);
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
        //console.log(data.toString());
        let data_str=data.toString();
        let array_argus=data_str.split(" ");
        //array_argus.forEach((valor,indice,array)=>{console.log(valor)});
        //console.log(array_argus);

        

        array_argus[array_argus.length-1]=(array_argus[array_argus.length-1]).trim();//Al ultimo elemento le saco el enter //trim quita no letras y num
        for(let i=0;i<array_argus.length;i++)
        {
            console.log(array_argus[i]);
        }



    });

});


server.listen(port);

console.log("Servidor echo corriendo en "+port);
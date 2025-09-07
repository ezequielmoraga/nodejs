
/*
printf "GET / HTTP/1.0\r\n\r\n" | nc 127.0.0.1 3000
printf "GET /api/Vehiculos  HTTP/1.0\r\n\r\n" | nc 127.0.0.1 3000
printf "GET /api/Habilitaciones  HTTP/1.0\r\n\r\n" | nc 127.0.0.1 3000

curl -X POST -d '{"nombre":"John", "edad":17}' -H "Content-Type: application/json" 127.0.0.1:3000

curl -X POST -d '{"nombre":"John", "edad":17}' -H "Content-Type: application/json" 127.0.0.1:3000/api/Choferes



*/


const PUERTO = 3000;
const http = require('http');


const servidor = http.createServer((req,res)=>{
    const {method} = req;
    //otra forma const metodo = req.method;
    switch(method)
    {
        case 'GET':
            return manejarSolicitudGET(req,res);break;
        case 'POST':
            return manejarSolicitudPOST(req,res);break;
        default:
            console.log(`El metodo usado no puede ser manejado por server, metodo: ${method}`);
            res.statusCode =501; // metodo no implementado
            res.end(`El metodo usado no puede ser manejado por server, metodo: ${method}`);
            break;
    }
});

function manejarSolicitudPOST(req,res)
{
    const path= req.url;
    if(path==='/api/Choferes')
    {
        let cuerpo ='';
        // captura evento data predetermiado
        req.on('data',contenido => {
           console.log("Se recibieron estos bytes en hexa: ",contenido);
           console.log("Se recibieron estos bytes en String: ",contenido.toString());
           //console.log("Se recibieron estos bytes en String desde JSON: ",JSON.stringify(contenido.toString()));
        });
        req.on('end',()=>{      
        return    res.end('Server recibio soliitud POST para /api/Choferes');    
        })
    }else
    {
        //si no esta el path se traba, entonces mandar error
        res.statusCode = 404;
        return    res.end('No existe el recurso');
    }
}

function manejarSolicitudGET(req,res)
{
        //Nota GET not tiene BODY
        const path= req.url;
        console.log(res.statusCode);//por defecto devuleve 200
        // mas elegante ruta /api
        if(path === '/'){
          res.writeHead(200,{'Content-Type' : 'application/json' });//armo cabecera rta  codeStado,
            //si decis que es json en cabecera el navegador espera eso
         return   res.end('Bienvenido al primer server y API con node.js');
        }
        else if(path === '/api/Choferes')
        {

        return  res.end('Hiciste GET a /api/Choferes');
        }
        else if(path === '/api/Vehiculos')
        {

        return    res.end('Hiciste GET a /api/Vehiculos');
        }
        else if(path === '/api/Habilitaciones')
        {

        return    res.end('Hiciste GET a /api/Habilitaciones');
        }
        else
        {
            //si no esta el path se traba, entonces mandar error
            res.statusCode = 404;
         return   res.end('No existe el recurso');
        }
//Esto lo simplificamos con framework Express
}





servidor.listen(PUERTO,()=>{
    console.log(`El server escucha en el puerto ${PUERTO}`);
});

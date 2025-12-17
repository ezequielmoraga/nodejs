
/*
5_Ejemplo_HTTP_GET_POST_CORS*
Implementa GET y POST
la respuesta GET /api/Choferes retonar un string sin formato con el contenido
del archivo Choferes

printf "GET / HTTP/1.0\r\n\r\n" | nc 127.0.0.1 3000
printf "GET /api/Choferes  HTTP/1.0\r\n\r\n" | nc 127.0.0.1:3000
printf "GET /api/Vehiculos  HTTP/1.0\r\n\r\n" | nc 127.0.0.1 3000
printf "GET /api/Habilitaciones  HTTP/1.0\r\n\r\n" | nc 127.0.0.1 3000

curl -X POST -d '{"nombre":"John", "edad":17}' -H "Content-Type: application/json" 127.0.0.1:3000

curl -X POST -d '{"nombre":"John", "edad":17}' -H "Content-Type: application/json" 127.0.0.1:3000/api/Choferes

*/

/*
Esta version puede vincularse con el index.html provisto para ser consumido desde el navegador
*/


const PUERTO = 3000;
const http = require('http');
const fs = require('fs');

//Leo truchamente de 3 archivos Choferes Vehiculos y Hablitaciones "la base de datos"
//Para no usar BBDD en este ejemplo los exporte a JSON

choferes_json=fs.readFileSync('./Choferes','utf-8');
Vehiculos_json=fs.readFileSync('./Vehiculos','utf-8');
Habilitaciones_json=fs.readFileSync('./Habilitaciones','utf-8');

array_objetos_chofereres=[]=JSON.parse(choferes_json);
array_objetos_Vehiculos=[]=JSON.parse(Vehiculos_json);//No implementado el uso
array_objetos_Habilitaciones=[]=JSON.parse(Habilitaciones_json);//No implementado el uso





const servidor = http.createServer((req,res)=>{

    //curl -I 127.0.0.1:3000
    //OJO ESTO PARCHE CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    //OJO ESTO PARCHE CORS
    

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
        //GET solo consultas READ de las (CRUD)
        let rta_a_cliente="";
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
            for(let i=0;i<array_objetos_chofereres.length;i++)
                {
                    rta_a_cliente+=`${array_objetos_chofereres[i].nombre} ${array_objetos_chofereres[i].apellido} ${array_objetos_chofereres[i].edad}`;
                }

        return  res.end(rta_a_cliente);
        //return  res.end(JSON.stringify(rta_a_cliente));

        //pendiente manejo de solicitud req erronea
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

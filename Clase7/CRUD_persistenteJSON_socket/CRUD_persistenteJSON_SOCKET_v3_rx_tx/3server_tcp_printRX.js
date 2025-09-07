//CREATE READ UPDATE DELETE  desde un socket hacia un archivo que hace de ddbb
let net = require('net');
const fs = require('fs');

function DDBB_json_al_array(archivo)
{
    datos=fs.readFileSync(archivo,'utf-8');//Ojo lectura sincronica se clava
    return(JSON.parse(datos)); //retorno array de objetos parseado desde JSON
}
function array_al_jsonDDBB(archivo,data_en_json)
{
        fs.writeFileSync(archivo,data_en_json,'utf-8');//Ojo escritura sincronica se clava
}

//Nota, se omite uso de try catch


let empleados=[]=DDBB_json_al_array("truchoDDBB.data")
let port = (process.argv[2]|| 7777);

class Persona {
    constructor(nombre, apellido,edad) {
      this.nombre=nombre;
      this.apellido=apellido;
      this.edad=edad;
    }
  }




function CREATE_Persona(nombre,apellido,edad)
{
    empleados.push(new Persona(nombre,apellido,edad));//No verifico existencia previa
}



function procesar_solicitudes(array_argus)
{
    let rta_a_cliente="";
    if(array_argus.length>1)
{
    //console.log("procesando solicitud");
    for (let i = 0; i < array_argus.length; i++) 
    {
    console.log(`argumento${i} : valor ${array_argus[i]}`);
    }


    if(array_argus[2]==="CREATE")
    {
        //Ejmplo uso CREATE Cosme Fulanito 22
    
        CREATE_Persona(array_argus[3],array_argus[4],array_argus[5]);

        array_al_jsonDDBB("truchoDDBB.data",JSON.stringify(empleados, null, 2));
        //console.log("Usuario Creado");//Este mensaje aparece en la terminal del server no va al cliente.
        rta_a_cliente="Usuario Creado";
        return(rta_a_cliente);

    }else if(array_argus[2]==="READ")
    {
        //READ
        //console.log(`Aca tenes que codear el  ${array_argus[2]}`);

        if(array_argus[3]==="ALL")
        {
            for(let i=0;i<empleados.length;i++)
            {
                console.log(`${empleados[i].nombre} ${empleados[i].apellido} ${empleados[i].edad}`);
                rta_a_cliente+=`${empleados[i].nombre} ${empleados[i].apellido} ${empleados[i].edad}\n`;
            }
            return(rta_a_cliente);


        }else if(array_argus[3]==="nombre" &&  array_argus[4]!=undefined )
        {
            let encontre=0;
            for (let i = 0; i < empleados.length; i++) 
            {
                if(array_argus[4]===empleados[i].nombre)
                {
                    console.log(`${empleados[i].nombre} ${empleados[i].apellido} ${empleados[i].edad}`);
                    encontre=1;
                }
            }
            if (encontre==0)
            {
                console.log(`la persona con nombre: ${array_argus[4]} no se encuentra`);
            }
        }




    }else if(array_argus[2]==="UPDATE")
    {
        //UPDATE
        console.log(`Aca tenes que codear el  ${array_argus[2]}`)
    }else if(array_argus[2]==="DELETE")
    {
        //DELETE
        console.log(`Aca tenes que codear el  ${array_argus[2]}`)
    }
}
}


let server = net.createServer((socket)=>{
    socket.write("Bienvenido al Serividor echo\n");

    //evento data, se reciben datos desde el otro lado
    
    socket.on('data',function(data)
    {

        let data_str=data.toString();
        let array_argus=data_str.split(" ");
        array_argus[array_argus.length-1]=(array_argus[array_argus.length-1]).trim();//Al ultimo elemento le saco el enter //trim quita no letras y num
        let array_argus_ajustado=["compensa el ejecutable de node","compensa el nombre del programa"];
        
        array_argus_ajustado = array_argus_ajustado.concat(array_argus);

        let retorno=procesar_solicitudes(array_argus_ajustado);
        if(retorno)
        {
            socket.write(retorno+"\n");
        }
        
        //Envio al cliente lo retornado por la funcion

    });

});


server.listen(port);

console.log("Servidor echo corriendo en "+port);
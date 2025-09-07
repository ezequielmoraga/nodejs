/*Como consecuencia de la lectura asincronica, no funciona el programa

Antes de operar CRUD deberia tener el arrray lleno
al hacerlo asincrono esto no me lo garantiza

solucion: ??

*/


//CREATE READ UPDATE DELETE 

class Persona {
    constructor(nombre, apellido,edad) {
      this.nombre=nombre;
      this.apellido=apellido;
      this.edad=edad;
    }
  }


const fs = require('fs');
let empleados=[];//creo el array pero vacio


/*Leo el archivo y e invoco una callback para retornalo*/
function DDBB_json_al_array(archivo,callback_retornadora)
{
   fs.readFile(archivo,'utf-8', (error,datos)=>{
        //Al final la lectura se llama a la calback flecha ()=>

        if(error)
        {
            //ocurrio error en la lectura, notifico usando callback_retornadora
            //a quien invoco a DDBB_json_al_array()
            callback_retornadora(error, null);
            return;
        }
        //Si no fallo agarro los datos los parseo a JSON y los retorno
        datos_parseados=JSON.parse(datos);
        callback_retornadora(null,datos_parseados);

   });//Lectura ASINCRONICA 
}


function array_al_jsonDDBB(archivo,data_en_json)
{
        fs.writeFileSync(archivo,data_en_json,'utf-8');//Ojo escritura sincronica se clava
}

//Nota, se omite uso de try catch




DDBB_json_al_array("truchoDDBB.data", (error_retornado,datos_parseados_retornador)=>{
    //Al producirse la lectura dentro de la funcion, se invoca una callback q 
    //envio desde aca
    //Tengo que determinar si la callback fue llamada por error, o por datos leidos
    if(error_retornado)
    {
        console.log('Error al leer el archivo:', err);
        process.exit(-1);
        //Si no puedo leer la base de datos no tiene sentido que continue en ejecucion
        //mi programa, me voy  
    }else
    {
        //si lei bien, lo meto al array
        empleados=datos_parseados_retornador;//empleados es un array
        console.log("Array Cargado");
        //console.log(empleados);
        console.log(`Aca si se cargo${empleados}`);
    }
});//Llamdo a la funcion que lee bbdd asincronicamente, me retorna lo leido y parseado
//en una callback
//Si falla se va del programa
console.log(`Notar que aca esta vacio todavia no se cargo${empleados}`);






function CREATE_Persona(nombre,apellido,edad)
{
    empleados.push(new Persona(nombre,apellido,edad));//No verifico existencia previa
}

for (let i = 0; i < process.argv.length; i++) 
{
    console.log(`argumento${i} : valor ${process.argv[i]}`);
}


if(process.argv.length>1)
{
    console.log(`Notar que aca esta vacio todavia no se cargo${empleados}`);
    
    if(process.argv[2]==="CREATE")
    {
        //Ejmplo uso CREATE Cosme Fulanito 22
    
        CREATE_Persona(process.argv[3],process.argv[4],process.argv[5]);

        array_al_jsonDDBB("truchoDDBB.data",JSON.stringify(empleados, null, 2));
        // for(let i=0;i<empleados.length;i++)
        // {
        //     console.log(`${empleados[i].nombre} ${empleados[i].apellido} ${empleados[i].edad}`);
        // }

    }else if(process.argv[2]==="READ")
    {
        //READ
        //console.log(`Aca tenes que codear el  ${process.argv[2]}`);

        if(process.argv[3]==="ALL")
        {
            for(let i=0;i<empleados.length;i++)
            {
                console.log(`${empleados[i].nombre} ${empleados[i].apellido} ${empleados[i].edad}`);
            }
        }else if(process.argv[3]==="nombre" &&  process.argv[4]!=undefined )
        {
            let encontre=0;
            for (let i = 0; i < empleados.length; i++) 
            {
                if(process.argv[4]===empleados[i].nombre)
                {
                    console.log(`${empleados[i].nombre} ${empleados[i].apellido} ${empleados[i].edad}`);
                    encontre=1;
                }
            }
            if (encontre==0)
            {
                console.log(`la persona con nombre: ${process.argv[4]} no se encuentra`);
            }
        }




    }else if(process.argv[2]==="UPDATE")
    {
        //UPDATE
        console.log(`Aca tenes que codear el  ${process.argv[2]}`)
    }else if(process.argv[2]==="DELETE")
    {
        //DELETE
        console.log(`Aca tenes que codear el  ${process.argv[2]}`)
    }
}
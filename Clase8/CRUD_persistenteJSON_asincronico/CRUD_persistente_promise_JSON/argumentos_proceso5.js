/*Como consecuencia de la lectura asincronica, no funciona el programa

Antes de operar CRUD deberia tener el arrray lleno
al hacerlo asincrono esto no me lo garantiza

solucion: process.nextTick(callback) y setTimeout(callback,delay)
*/

//Una version analoga a esta es 6_1 y 6_2 nexttick , visto en clase Event_Loop


//CREATE READ UPDATE DELETE 

class Persona {
    constructor(nombre, apellido,edad) {
      this.nombre=nombre;
      this.apellido=apellido;
      this.edad=edad;
    }
  }


const fs = require('fs/promises');



/*Leo el archivo usando readFIle version promise */
async function DDBB_json_al_array(archivo)
{
   let datos = await fs.readFile(archivo,'utf-8');

    datos_parseados=JSON.parse(datos);
    //console.log(datos_parseados);
    return(datos_parseados);
      
}


function array_al_jsonDDBB(archivo,data_en_json)
{
        fs.writeFileSync(archivo,data_en_json,'utf-8');//Ojo escritura sincronica se clava
}

function CREATE_Persona(nombre,apellido,edad)
{
    empleados.push(new Persona(nombre,apellido,edad));//No verifico existencia previa
}

let empleados=[];
/*Version con promesas*/
DDBB_json_al_array("truchoDDBB.data").then(datos_leidos_OK => {
    empleados=datos_leidos_OK;
}).catch(error_lectura =>{
    console.log("El fallo fue:",error_lectura);
    process.exit(-1);//Si no pudo leer que finalize
});



/*definicion de la funcion q atiende argumento*/
function atiende_argumentos()
{
    if(process.argv.length>1)
    {
        
        
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

}



/*Con setTimeout planifico la funcion atiende_argumentos para que se ejecute en 500ms
pensando que sera suficiente para que se termine la lectura del archivo*/


setTimeout(()=>{
    atiende_argumentos();
},500);


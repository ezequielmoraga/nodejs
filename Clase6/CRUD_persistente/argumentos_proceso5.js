
//CREATE READ UPDATE DELETE 
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

for (let i = 0; i < process.argv.length; i++) 
{
    console.log(`argumento${i} : valor ${process.argv[i]}`);
}


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

//CREATE READ UPDATE DELETE 

class Persona {
    constructor(nombre, apellido,edad) {
      this.nombre=nombre;
      this.apellido=apellido;
      this.edad=edad;
    }
  }

let empleados=[];
empleados[0]=new Persona("Juan","Sanchez",55);
empleados[1]=new Persona("Sancho","Panza",22);
empleados[2]=new Persona("John","Connor",16);
empleados[3]=new Persona("Kyle ","Reese",25);


for (let i = 0; i < process.argv.length; i++) 
{
    console.log(`argumento${i} : valor ${process.argv[i]}`);
}


if(process.argv.length>1)
     {
    
    if(process.argv[2]==="CREATE")
    {
        //CREATE
        console.log(`Aca tenes que codear el  ${process.argv[2]}`);
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
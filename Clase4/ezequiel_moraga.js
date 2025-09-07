
//CREATE READ UPDATE DELETE 

class Persona {
    constructor(nombre, apellido,edad,dni) {
      this.nombre=nombre;
      this.apellido=apellido;
      this.edad=edad;
    }
  }

let empleados=[];
empleados[0]=new Persona("Juan","sanchez",55);
empleados[1]=new Persona("Sancho","Panza",22);
empleados[2]=new Persona("John","Connor",16);
empleados[3]=new Persona("Kyle","Reese",25);
empleados[4]=new Persona("nicolas","Orquera",22);
empleados[5]=new Persona("ezequiel","moraga",33);

console.log("Ezequiel Moraga curso nodejs año 2025 - entrega 4");

for (let i = 0; i < process.argv.length; i++) 
{
    console.log(`argumento${i} : valor ${process.argv[i]}`);
}


if(process.argv.length>1)
     {
    
     if(process.argv[2]==="CREATE")
     {
     let nombre = process.argv[3];
     let apellido = process.argv[4];
     let edad = parseInt(process.argv[5]);
     let existe = 0;

     for(let i=0; i<empleados.length; i++)
     {
        if(empleados[i].nombre === nombre && empleados[i].apellido === apellido)
        {
            existe = 1;
        }
     }if(existe === 0)
        {
           empleados.push(new Persona(nombre, apellido, edad, null));
          console.log(`Empleado agregado: ${nombre} ${apellido} ${edad}`);
        }
        else
            {
                console.log(`El empleado ${nombre} ${apellido} ya existe`);
            }
    
    
    
    }else if(process.argv[2]==="READ")
     {
        //READ

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

     }
    else if(process.argv[2]==="UPDATE" && process.argv[3]==="nombre")
        {
           let nombreV = process.argv[4];
           let nombreN = process.argv[5];
           let apellidoN = process.argv[6];
           let edadN = parseInt(process.argv[7]);
         for(let i=0; i<empleados.length; i++)
            {//VARIABLES NUEVAS CON CAMECASE nombreN, apellidoN, edadN.
                if(empleados[i].nombre === nombreV)
                {       
                    empleados[i].nombre = nombreN;
                    empleados[i].apellido = apellidoN;
                    empleados[i].edad = edadN;
                    console.log(`Empleado actualizado: ${empleados[i].nombre} ${empleados[i].apellido} ${empleados[i].edad}`);
             }
            }
        }
    else if(process.argv[2]==="DELETE")
        {
            if(process.argv[3]==="ALL")
                {
                    empleados = [];
                    console.log("Todos los empleados fueron eliminados");
                }
            else if(process.argv[3]==="nya" && process.argv[4]!=undefined && process.argv[5]!=undefined)
                  
                {
                    for(let i=0; i<empleados.length; i++)
                {
                    if(process.argv[4]===empleados[i].nombre && process.argv[5]===empleados[i].apellido)
                        {
                            console.log(`Eliminando: ${empleados[i].nombre} ${empleados[i].apellido} ${empleados[i].edad}`);
                            empleados.splice(i,1);
                        }
                    // else{
                    //     console.log(`No se encontro el empleado: ${process.argv[4]} ${process.argv[5]}`);
                    // }

              }
        }
    }


console.log("LAS OPCIONES SON: CREATE, READ , READ ALL, UPDATE, DELETE ALL,DELETE NYA");
}



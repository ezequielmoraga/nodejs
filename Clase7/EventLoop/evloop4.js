
/*Analizar
ejecucion sincrona de los console log de tarea1 y tarea2
explicar como el codigo sincrono es planificado, sino seria llamado solo 1 vez*/

function tarea1(var1)
{
    let i=0;
    for(i=0;i<10;i++)
    {
        setTimeout(()=>{console.log("Soy "+var1+" Pierdo el tiempo"+i)},20);
        console.log("soy tarea1");
    }
}
function tarea2(var1)
{
    let i=0;
    for(i=0;i<10;i++)
    {
        
        setTimeout(()=>{console.log("Soy "+var1+" Pierdo el tiempo"+i)},20);
        //notar que se planifican en el loopeo y se ejecutan luego
        console.log("soy tarea2");
    }
}

//Ejemplo de ejecucion secuencial
console.log("Este es el prinicipio");
tarea1('A');
tarea2('B');
console.log("Llegue al final");
//Si ejecutan los timeouts de A y luego los B, duran mismo tiempo y A se planifica antes
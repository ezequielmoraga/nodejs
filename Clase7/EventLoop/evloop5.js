
/*Analizar
ejecucion sincrona de los console log de tarea1 y tarea2
explicar como el codigo sincrono es planificado, sino seria llamado solo 1 vez*/

function tarea1(var1)
{
    let i=0;
    for(i=0;i<10;i++)
    {
        setTimeout(()=>{console.log("Soy "+var1+" Pierdo el tiempo"+i)},10);
        console.log("soy tarea1");
    }
}
function tarea2(var1)
{
    let i=0;
    for(i=0;i<10;i++)
    {
        
        setTimeout(()=>{console.log("Soy "+var1+" Pierdo el tiempo"+i)},10);
        //notar que se planifican en el loopeo y se ejecutan luego
        console.log("soy tarea2");
    }
}
function tarea3(var1)
{
    let i=0;
    for(i=0;i<10;i++)
    {
        
        setTimeout(()=>{console.log("Soy "+var1+" Pierdo el tiempo"+i)},9);
        //notar que se planifican en el loopeo y se ejecutan luego
        console.log("soy tarea3");
    }
}

//Ejemplo de ejecucion secuencial
console.log("Este es el prinicipio");
tarea1('A');
tarea2('B');
tarea3('C');
console.log("Llegue al final");
// El tiempo settimeout de tarea3  similar pero no igual a A y B
//ejecutando varias veces se ve la no sincronia
//CCAABBCC
//AABBCC
//etc
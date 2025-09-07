
/*Analizar
ejecucion sincrona de los console log de tarea1 y tarea2
explicar como el codigo sincrono es planificado, sino seria llamado solo 1 vez*/

function tarea(tarea,tiempo)
{
    let i=0;
    for(i=0;i<4;i++)
    {
        console.log(setTimeout(()=>{console.log("Soy "+tarea+" Pierdo el tiempo")},tiempo));
        //imprimo valor retornado setTimeout
        console.log("soy"+tarea);
    }
}



//Ejemplo de ejecucion secuencial
console.log("Este es el prinicipio");
tarea('A',300);
tarea('B',301);
tarea('C',299);
console.log("Llegue al final");
// El tiempo settimeout de tarea3  similar pero no igual a A y B
//ejecutando varias veces se ve la no sincronia
//CCAABBCC
//AABBCC
//etc
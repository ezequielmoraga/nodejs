//Si una ejecucion tiene una demora 
//Si la ejecucion es sincronica debe terminar la tarea 1 para hacer la tarea2



//Una promesa es un objeto que vincula la nescesidad de una ejecucion con su espera de que se
//realize, para desatender la ejecucion  principal de esto

//Cosntruyo promesa, la promesa recibe una callback que tieen que manejarme la tarea

//esa funcion tiene 2 argumentos

//Uno cuando es CORRECTA la ejecucion de la promesa

//Uno cuando es INCORRECTA la ejecucion de la promesa

//Se que algo del procesamiento puede demorar, entonces lo voy a ejecutar dentro de una callback que le mando 
//a una promesa, en ese callback funcion q maneja el exito o no de la promesa, invoco la resolucion exitosa o no



let promesa = new Promise(function(myResolve, myReject) {
    
    setTimeout( function inventaResultado() {
        let numero=Math.floor(Math.random() * 10);
        if( ! ( numero%2 )  )
        {//es par
           myResolve(`El numero par fue ${numero}`);//indica la resolucion correcta
        } else
        {
           myReject(`El numero impar fue ${numero}`);//indica el fallo
        }
        
    } ,  2500);
    

    });
    
    //Cuando finalize realizara
    promesa.then(
/*f_BIEN*/    function(value) { console.log("Mensaje devuelto por ejecucion CORRECTA: "+value); },
/*f_MAL*/     function(error) { console.log("Mensaje devuelto por ejecucion ERRONEA: "+error); }
    );

// Si la promesa es correcta,  se llama a myResolve, esta activa f_BIEN enviandole un valor 
// Si la promesa es incorrecta,  se llama a myReject, esta activa f_MAL enviandole un valor 

setInterval(()=>{console.log("Paso 0.5 segundo");}, 500);
setInterval(()=>{console.log("Paso 0.7 segundo");}, 700);

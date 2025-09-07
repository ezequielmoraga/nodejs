// Función simulada que realiza una tarea asincro ;devuelve una promesa
function asyncTask1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulación de tarea asincro
            console.log("Tarea asincro 1 completada");
            resolve("Resultado de tarea asincro 1");
        }, 60000); // Simulamos una operación asincrónica con un retraso de 4 segundo
    });
}

// Función simulada que realiza otra tarea asincro ;devuelve una promesa
function asyncTask2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulación de tarea asíncrona
            console.log("Tarea asincro 2 completada");
            resolve("Resultado de tarea asincro 2 basado en: " + data);
        }, 1500); // Simulamos una operación asincro con un retraso de 1.5 segundos
    });
}


// Encadenamiento de promesas para ejecutar tareas en secuencia
asyncTask1()
    .then((result1) => {
        console.log("Resultado de tarea asíncrona 1:", result1);
        return asyncTask2(result1); // Pasamos el resultado de la primera tarea a la segunda tarea
    })
    .then((result2) => {
        console.log("Resultado de tarea asíncrona 2:", result2);
        console.log("Todas las tareas asíncronas han sido completadas");
    })
    .catch((error) => {
        console.error('Ocurrió un error:', error);
    });

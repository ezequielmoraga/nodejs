//Para esta semana te pido que realices el siguiente programa en js y muestres su ejecucion utilizando nodejs

// El programa debera tener una clase llamada Cliente
// Dicha clase tiene un metodo constructor que recibe 3 parametros tipo string  IP, puerto , solicitud
// Dicha clase debera tener un metodo que imprima los 3 atributos.
// Se debe instanciar 2 objetos de esta clase , pasarle datos de ejemplo a los constructores cuando se instancia.

// Luego invocar el metodo que muestra los datos para cada objeto.



class Cliente {
    constructor(IP, puerto, solicitud) {
        this.IP = IP;
        this.puerto = puerto;
        this.solicitud = solicitud;
    }

    
    mostrarDatos() {
        console.log(`IP: ${this.IP}`);
        console.log(`Puerto: ${this.puerto}`);
        console.log(`Solicitud: ${this.solicitud}`);
        console.log('--');
    }
}


const cliente1 = new Cliente("11.0.0.1", "2025", "GET /index.html");
const cliente2 = new Cliente("11.0.0.2", "2026", "POST /api/datos");


cliente1.mostrarDatos();
cliente2.mostrarDatos();

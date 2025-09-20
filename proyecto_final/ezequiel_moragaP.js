// CRUD con persistencia en archivo (Semana 6)

const fs = require("fs");

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

// Leer archivo si existe, sino empezar vacío
let empleados = [];
if (fs.existsSync("BBDD.data")) {
    empleados = JSON.parse(fs.readFileSync("BBDD.data", "utf-8"));
}

// Guardar cambios
function guardar() {
    fs.writeFileSync("BBDD.data", JSON.stringify(empleados, null, 2));
}

// CREATE
if (process.argv[2] === "CREATE") {
    let nombre = process.argv[3];
    let apellido = process.argv[4];
    let edad = parseInt(process.argv[5]);
    let existe = false;

    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].nombre === nombre && empleados[i].apellido === apellido) {
            existe = true;
        }
    }

    if (!existe) {
        empleados.push(new Persona(nombre, apellido, edad));
        console.log("Empleado agregado:", nombre, apellido, edad);
        guardar();
    } else {
        console.log("Ese empleado ya existe");
    }
}

// READ
else if (process.argv[2] === "READ") {
    if (process.argv[3] === "ALL") {
        for (let i = 0; i < empleados.length; i++) {
            console.log(empleados[i].nombre, empleados[i].apellido, empleados[i].edad);
        }
    } else if (process.argv[3] === "nombre" && process.argv[4] != undefined) {
        let encontre = 0;
        for (let i = 0; i < empleados.length; i++) {
            if (empleados[i].nombre === process.argv[4]) {
                console.log(empleados[i].nombre, empleados[i].apellido, empleados[i].edad);
                encontre = 1;
            }
        }
        if (encontre == 0) {
            console.log("No se encontró la persona con nombre:", process.argv[4]);
        }
    }
}

// UPDATE
else if (process.argv[2] === "UPDATE" && process.argv[3] === "nombre") {
    let nombreViejo = process.argv[4];
    let nombreNuevo = process.argv[5];
    let apellidoNuevo = process.argv[6];
    let edadNueva = parseInt(process.argv[7]);

    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].nombre === nombreViejo) {
            empleados[i].nombre = nombreNuevo;
            empleados[i].apellido = apellidoNuevo;
            empleados[i].edad = edadNueva;
            console.log("Empleado actualizado:", empleados[i].nombre, empleados[i].apellido, empleados[i].edad);
            guardar();
        }
    }
}

// DELETE ALL
else if (process.argv[2] === "DELETE" && process.argv[3] === "ALL") {
    empleados = [];
    console.log("Todos los empleados fueron borrados");
    guardar();
}

// DELETE NYA
else if (process.argv[2] === "DELETE" && process.argv[3] === "NYA") {
    let nombre = process.argv[4];
    let apellido = process.argv[5];
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].nombre === nombre && empleados[i].apellido === apellido) {
            console.log("Eliminando:", empleados[i].nombre, empleados[i].apellido);
            empleados.splice(i, 1);
            guardar();
        }
    }
}



// Mostrar opciones
console.log("OPCIONES:");
console.log("---------------------");
console.log("* CREATE : NOMBRE APELLIDO EDAD");
console.log("* READ nombre NOMBRE : LEER DE A UNO");
console.log("* READ ALL : LEER TODA LA BD");
console.log("* UPDATE nombre VIEJO NOMBRE NUEVO APELLIDO NUEVO EDAD NUEVA");
console.log("* DELETE nya NOMBRE APELLIDO : BORRA DE A 1 PERSONA");
console.log("* DELETE ALL : BORRA TODA LA LISTA");
console.log("* ENTREGA 6 EZEQUIEL MORAGA CURSO NODE JS EC INFORMATICA -2025-");

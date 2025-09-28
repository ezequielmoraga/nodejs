//ENTREGA 7 -EZEQUIEL MORAGA Curso NodeJS - EC Informática

const net = require("net");
const fs = require("fs");

//ffunciones de manejo de archivo JSON
function DDBB_json_al_array(archivo) {
  let datos = fs.readFileSync(archivo, "utf-8");
  return JSON.parse(datos);
}

function array_al_jsonDDBB(archivo, data_en_json) {
  fs.writeFileSync(archivo, data_en_json, "utf-8");
}

//clase
class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
}

//bbdd
let empleados = [];
if (fs.existsSync("BBDD.data")) {
  empleados = DDBB_json_al_array("BBDD.data");
}

// crud
function CREATE(nombre, apellido, edad) {
  for (let i = 0; i < empleados.length; i++) {
    if (empleados[i].nombre === nombre && empleados[i].apellido === apellido) {
      return " NO PERMITIDA\r\nEste empleado ya existe.\r\n";
    }
  }
  empleados.push(new Persona(nombre, apellido, edad));
  array_al_jsonDDBB("BBDD.data", JSON.stringify(empleados, null, 2));
  return `SOLICITUD OK \r\n Se creo correctamente ${nombre} ${apellido} ${edad}\r\n`;
}

function READ_ALL() {
  let salida = "SOLICITUD OK\r\n";
  for (let i = 0; i < empleados.length; i++) {
    salida += `${empleados[i].nombre} ${empleados[i].apellido} ${empleados[i].edad}\r\n`;
  }
  return salida;
}

function READ_NOMBRE(nombre) {
  for (let i = 0; i < empleados.length; i++) {
    if (empleados[i].nombre === nombre) {
      return `SOLICITUD OK\r\n${empleados[i].nombre} ${empleados[i].apellido} ${empleados[i].edad}\r\n`;
    }
  }
  return "NO PERMITIDA\r\nNo se encontro ese nombre.\r\n";
}

function DELETE_ALL() {
  empleados = [];
  array_al_jsonDDBB("BBDD.data", JSON.stringify(empleados, null, 2));
  return "SOLICITUD OK\r\nSe borraron todos los empleados.\r\n";
}

function DELETE_NYA(nombre, apellido) {
  for (let i = 0; i < empleados.length; i++) {
    if (empleados[i].nombre === nombre && empleados[i].apellido === apellido) {
      empleados.splice(i, 1);
      array_al_jsonDDBB("BBDD.data", JSON.stringify(empleados, null, 2));
      return `SOLICITUD OK\r\nSe elimino ${nombre} ${apellido}\r\n`;
    }
  }
  return "NO PERMITIDA\r\nNo se encontro esa persona.\r\n";
}

// solicitudes
function procesar_solicitudes(argv) {
  let comando = argv[2] ? argv[2].toUpperCase() : "";

  if (comando === "CREATE" && argv.length === 6) {
    return CREATE(argv[3], argv[4], argv[5]);
  } else if (comando === "READ" && argv[3] === "ALL") {
    return READ_ALL();
  } else if (comando === "READ" && argv[3] === "nombre" && argv[4] != undefined) {
    return READ_NOMBRE(argv[4]);
  } else if (comando === "DELETE" && argv[3] === "ALL") {
    return DELETE_ALL();
  } else if (comando === "DELETE" && argv[3] === "nya" && argv[4] && argv[5]) {
    return DELETE_NYA(argv[4], argv[5]);
  } else {
    return "NO PERMITIDA\r\n";
  }
}

// servidor
let port = process.argv[2] || 7777;

let server = net.createServer((socket) => {
    socket.write(" Bienvenido al Servidor de Ezequiel Moraga\r\n");





    socket.on("data", function (data)
    {
        let data_str = data.toString();
        let array_argus = data_str.split(" ");
        array_argus[array_argus.length - 1] = (array_argus[array_argus.length - 1]).trim();

       //procesos

        let array_argus_ajustado = ["node", "ezequiel_moraga7.js"];
        array_argus_ajustado = array_argus_ajustado.concat(array_argus);

        let retorno = procesar_solicitudes(array_argus_ajustado);
        if (retorno) {
            socket.write(retorno + "\r\n");
        } else {
            socket.write("Solicitud vacia o invalida \r\n");
        }
    });

});

server.listen(port);


console.log("Servidor corriendo en " + port);

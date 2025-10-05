//ENTREGA 7 -EZEQUIEL MORAGA Curso NodeJS - EC Informática

const fs = require("fs").promises;
const net = require("net");





//ffunciones de manejo de archivo JSON
async function DDBB_json_al_array(archivo) {
  try {
    const datos = await fs.readFile(archivo, "utf-8");
    return JSON.parse(datos);
  } catch (err) {
    // Si el archivo no existe, devolvemos lista vacía
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

async function array_al_jsonDDBB(archivo, data_en_json) {
  try {
    await fs.writeFile(archivo, data_en_json, "utf-8");
  } catch (err) {
    console.error("Error al escribir archivo:", err);
  }
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
(async () => {
  empleados = await DDBB_json_al_array("BBDD.data");
})();




// crud
async function CREATE(nombre, apellido, edad) {
  for (let i = 0; i < empleados.length; i++) {
    if (empleados[i].nombre === nombre && empleados[i].apellido === apellido) {
      return " NO PERMITIDA\r\nEste empleado ya existe.\r\n";
    }
  }
  empleados.push(new Persona(nombre, apellido, edad));
  await array_al_jsonDDBB("BBDD.data", JSON.stringify(empleados, null, 2));

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

async function DELETE_ALL() {
  empleados = [];
  array_al_jsonDDBB("BBDD.data", JSON.stringify(empleados, null, 2));
  return "SOLICITUD OK\r\nSe borraron todos los empleados.\r\n";
}

async function DELETE_NYA(nombre, apellido) {
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
async function procesar_solicitudes(argv) {
  let comando = argv[2] ? argv[2].toUpperCase() : "";

  if (comando === "CREATE" && argv.length === 6) {
    return await CREATE(argv[3], argv[4], argv[5]);
  } else if (comando === "READ" && argv[3] === "ALL") {
    return READ_ALL();
  } else if (comando === "READ" && argv[3] === "nombre" && argv[4] != undefined) {
    return READ_NOMBRE(argv[4]);
  } else if (comando === "DELETE" && argv[3] === "ALL") {
    return await DELETE_ALL();
  } else if (comando === "DELETE" && argv[3] === "nya" && argv[4] && argv[5]) {
    return await DELETE_NYA(argv[4], argv[5]);
  } else {
    return "NO PERMITIDA\r\n";
  }
}


// servidor
let port = process.argv[2] || 7777;

let server = net.createServer((socket) => {
    socket.write(" Bienvenido al Servidor de Ezequiel Moraga\r\n");
    socket.write(" Entrega semana 8 :\r\n");





socket.on("data", async function (data) {
  let data_str = data.toString();
  let array_argus = data_str.split(" ");
  array_argus[array_argus.length - 1] = array_argus[array_argus.length - 1].trim();

  let array_argus_ajustado = ["node", "ezequiel_moraga8.js"];
  array_argus_ajustado = array_argus_ajustado.concat(array_argus);

  try {
    let retorno = await procesar_solicitudes(array_argus_ajustado);
    socket.write(retorno + "\r\n");
  } catch (error) {
    socket.write("Error interno\r\n" + error.message + "\r\n");
  }
});

 
});

server.listen(port);


console.log("Servidor corriendo en " + port);



//127.0.0.1:7777
//node ezequiel_moraga7.js 7777
//raw y never close windows
//comprobacion de programa

//Bienvenido al Servidor de Ezequiel Moraga


// CREATE Juan Perez 30


// READ ALL


// DELETE nya Juan Perez

// READ ALL


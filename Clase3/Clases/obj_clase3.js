class Persona {
    constructor(nomb, apellido,edad) {
      this.nombre = nomb;
      this.apellido = apellido;
      this.edad=edad;
    }
    mostrarDatos ()
    {
      console.log(this.nombre);
      console.log(this.apellido);
      console.log(this.edad);
    }
  }


  let p1 = new Persona("saelmi","cudek",37);
  const p2 = new Persona("Sancho","Panza",66);


  // console.log(p1.nombre);

  // console.log(p2.nombre);

  p1.mostrarDatos();
  p2.mostrarDatos();
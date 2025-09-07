class Persona {
    constructor(nomb, apellido,edad) {
      this.nombre = nomb;
      this.apellido = apellido;
      this.edad=edad;
    }
  }


  let p1 = new Persona("saelmi","cudek",37);
  let p2 = new Persona("Sancho","Panza",66);

  p1["peso"]=95;

  console.log(p1.nombre);
  console.log(p1.peso);

  console.log(p2.nombre);
  
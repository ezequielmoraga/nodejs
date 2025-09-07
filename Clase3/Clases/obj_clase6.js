class Persona {
    constructor(nomb, apellido,edad) {
      this.nombre = nomb;
      this.apellido = apellido;
      this.edad=edad;
    }
    static mostrarEspecieInfo()
    {
      console.log("Ser humano");
    }
    
getNombre()
{
return (this.nombre);
}
getApellido()
{
  return (this.apellido);
}
getEdad()
{
  return (this.edad);
}
  }

  Persona.mostrarEspecieInfo();

  let p1 = new Persona("saelmi","cudek",37);
  const p2 = new Persona("Sancho","Panza",66);

  

console.log(p1.getNombre());

console.log(p2.getApellido());
class Persona {
    constructor(nomb, apellido,edad) {
      this.nombre = nomb;
      this.apellido = apellido;
      this.edad=edad;
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


  let p1 = new Persona("saelmi","cudek",37);
  const p2 = new Persona("Sancho","Panza",66);

  getNombre();//es un metodo de objeto explicar pq no se puede usar asi
  Persona.getNombre();//es un metodo de objeto explicar pq no se puede usar asi

console.log(p1.getNombre());

console.log(p2.getApellido());
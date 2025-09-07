class Persona {
    constructor(nomb, apellido,edad) {
      this.nombre = nomb;
      this.apellido = apellido;
      this.edad=edad;
    }
setNombre(nom)
    {
    this.nombre=nom;
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


console.log(p1.getNombre());
p1.nombre="Eduardo";
console.log(p1.getNombre());

console.log(p2.getNombre());
p2.setNombre("Quijote");
console.log(p2.getNombre());
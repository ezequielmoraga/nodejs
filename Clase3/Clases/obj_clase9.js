class Persona {
    constructor(nomb, apellido,edad) {
      this.nombre = nomb;
      this.apellido = apellido;
      this.edad=edad;
    }
    static mostrarEspecieInfo()
    {
      console.log("Ser humano "+this.nombre);//no usar no hay objeto
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

class Empleado extends Persona
{
  constructor(nombre, apellido,edad,antiguedad)
  {
    super(nombre,apellido,edad);
    this.anti=antiguedad;
  }
}  



  let p1 = new Persona("saelmi","cudek",37);

  Empleado.mostrarEspecieInfo();

  let e1= new Empleado("eduardo","Sanchez",50,24);

  console.log(e1.getApellido());
  console.log(e1.getNombre());
  console.log(e1.getEdad());
  console.log(e1.anti);

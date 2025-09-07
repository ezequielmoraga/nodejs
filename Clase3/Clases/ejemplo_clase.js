const producto = 
{
    productoNombre:"Salame", 
    descripcion:"Milan",
    precio:9000, 
    iva:21,
    mostrarDatos(){
        console.log(this.productoNombre);        
        console.log(this.descripcion);
        console.log(this.precio);
        console.log(this.iva);
    },
    getInfo()
    {
        return(`El ${this.productoNombre}, tipo ${this.descripcion} vale ${this.precio} sin el iva de ${this.iva} % `);

    }
};

producto.mostrarDatos();
console.log(producto);

console.log(producto.getInfo());
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





const {productoNombre,descripcion,precio,iva  } = producto;



console.log(`${productoNombre} ${descripcion} ${precio} ${iva}`);
//para desestructurar un objeto, las variables de atajar deben nombrarse igual
//que en el objeto
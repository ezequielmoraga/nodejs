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

function analizoObjetos({productoNombre,descripcion,precio,iva,vencimiento =new Date("2029-01-09") })
{
    console.log(productoNombre);        
    console.log(descripcion);
    console.log(precio);
    console.log(iva);
    console.log(vencimiento);

}

analizoObjetos(producto);

//deestructurar en argumento de funcion
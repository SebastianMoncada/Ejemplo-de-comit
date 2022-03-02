
// Se declara el objeto libro, para saber que es un objeto se declara en corchetes
var libro = {
    titulo: "Viaje a las estrellas",
    paginas: 354,
    Autor: "EL nombre del autor del libro",
    Precio: 3.000,
    stock: true

}

console.log(libro);
//modificamos el valor del precio a 25
libro.Precio = 25;
//imprimimos en consola
libro.proveedor = "Gabriel garcia marquez";
console.log(libro);
// variables de JS necesarias y funcion escencial del proceso a simular
const suma =(a,b) => a + b;
const resta =(a,b) => a - b;
const iva = x => x * 0.21;

let precioProducto1 = 1500;
let precioProducto2 = 1800;
let descuento = 150;

let nuevoPrecio1 = resta (suma (precioProducto1, iva (precioProducto1)), descuento);
console.log (nuevoPrecio1);

let nuevoPrecio2 = resta (suma (precioProducto2, iva (precioProducto2)), descuento);
console.log (nuevoPrecio2);
// Objetos de JavaScript

let Producto1 = {
    nombre : "Moño Velvet",
    color : "Rojo",
};
 console.log (Producto1);


 // ARRAYS Y METODOS 
 const modelos = ["Moño Velvet", "Moño Rock" , "Moño yellow" , "Moño Paz"];
console.log (modelos.indexOf ("Moño yellow"));
//INTERACTUANDO CON EVENTO - TECLA ENTER
function respuesta () {
    console.log ("click");
    }
    let boton = document.getElementById ("boton");
    boton.addEventListener("click" , respuesta);
    
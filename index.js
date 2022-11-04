var nombre;
nombre = prompt ("escribe tu email para recibir novedades", "e-mail");
alert ("Ahora recibiras promociones y novedades");
document.addEventListener("DOMContentLoaded", () => {
    fetchData ()
})
const fetchData = async () => {
    try {
        const res = await fetch ('data.json')
        const data =await res.json ()
        console.log (data)
    } catch (error) {
        console.log (error)
    }
}
let pagar = document.getElementById ("comprar");
    pagar.addEventListener("click" , () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'agregado al carrito de compras',
            showConfirmButton: false,
            timer: 1500
          })
    });
    
    
      
    // ARRAYS Y METODOS 
 const modelos = ["Moño Velvet", "Moño rock"];
console.log (modelos.indexOf ("Moño rock"));
 // FUNCIONES
 const suma =(a,b) => a + b;
const resta =(a,b) => a - b;
const iva = x => x * 0.21;

let precioProducto1 = 1500;
let precioProducto2 = 1800;
let descuento = 150;
let cupon = 300;

let nuevoPrecio1 = resta (suma (precioProducto1, iva (precioProducto1)), descuento);
console.log (nuevoPrecio1);

let nuevoPrecio2 = resta (suma (precioProducto2, iva (precioProducto2)), descuento);
console.log (nuevoPrecio2);
let nuevoPrecio3 =
// Objetos de JavaScript

let , producto1 = {
    nombre : "Moño Velvet",
    color : "Rojo",
};
 console.log (Producto1);
// CONDICIONALES 
let cuponBoton = document.getElementById ("si");
let Cupon ="si";
if (Cupon == "si") {
    console.log ("si tengo cupon");

}else {
    console.log ("no tengo cupon");
};



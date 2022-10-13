// variables de JS necesarias y funcion escencial del proceso a simular
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
    //CREANDO UN ELEMENTO DESDE JAVASCRIPT
 const lista = document.getElementById ("lista");
 
 const arrayItem = ["primer moño", "segundo moño" , "tercer moño" , "cuarto moño"];

const fragment = document.createDocumentFragment ();

arrayItem.forEach (item => {
    const li = document.createElement ("li");
    li.textContent = item;
    fragment.appendChild (li);
    
});
lista.appendChild (fragment);

// UTILIZAMOS LIBRERIA PARA ACREDITAR QUE LA COMPRA SE REALIZO CON EXITO 
function respuesta () {
    console.log ("click");
    }
    let pagar = document.getElementById ("COMPRAR");
    pagar.addEventListener("click" , () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'tu compra se realizo con exito',
            showConfirmButton: false,
            timer: 1500
          })
    });

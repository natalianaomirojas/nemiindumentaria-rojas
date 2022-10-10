/* Seleccionar el artículo que se desea ver*/

let ingreso = prompt(
  "Ingresa una opción \n 1-Lencería \n 2-Remeras \n 3-Polleras \n 4-Shorts \n 5-Ofertas"
);
switch (ingreso) {
  case "1":
    alert("Seleccionaste ver nuestro stock de lencería");
    break;
  case "2":
    alert("Seleccionaste ver nuestro stock de remeras");
    break;
  case "3":
    alert("Seleccionaste ver nuestro stock de polleras");
    break;
  case "4":
    alert("Seleccionaste ver nuestro stock de shorts");
    break;
  case "5":
    alert("Seleccionaste ver nuestras ofertas");
    break;  
  default:
    alert("Opción no válida");
    break;
}

/* Realizar un filtro por precio*/

let porPrecio = prompt(
  "Selecciona un opción \n 1 - Menor precio \n 2 - Mayor precio"
);

function filtrarPorPrecio(arr, filtro) {
  let valor = prompt("Ingresa el monto");

  return arr.filter((el) => {
    switch (filtro) {
      case "1":
        return el.precio < valor;
        break;
      case "2":
        return el.precio > valor;
        break;
    }
  });
}

const precio = filtrarPorPrecio(servicios, porPrecio);
console.log(precio);

/* Arrays de objetos */

const lenceria={modelo:"Body", talle: 1, precio: 1000}

const Productos=[];

function producto(modelo, precio, talle){
this.modelo= modelo;
this.precio= parseFloat(precio);
this.talle= talle;

this.sumarIva=()=>{
  this.precio = this.precio * 1.21;
}
}

const productoNuevo= new producto('Remera', 1, 1500);
const productoNuevo1= new producto('Pollera', 38, 2000);
console.log(productoNuevo.precio);
productoNuevo.sumarIva();
console.log(productoNuevo.precio);


function cargarProductos(producto){
 Productos.push(producto);
}

cargarProductos(lenceria);
cargarProductos(productoNuevo);
cargarProductos(productoNuevo1);

console.log(Productos);

for (const objeto of Productos) {
  console.log(objeto);
}



let ingreso = prompt(
  "Ingresa una opción \n 1-Lencería \n 2-Remeras \n 3-Polleras \n 4-Shorts \n 5-Ofertas"
);
switch (ingreso) {
  case "1":
    alert("Seleccionaste ver nuestro stock de lencería");
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


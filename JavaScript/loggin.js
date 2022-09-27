
let continuar = false;
let passGuardado = "desafio01";

do {
  let password = prompt("Ingresa tu password");
  if (password == passGuardado) {
    console.log("Bienvenido/a");
    continuar = false;
  }
} while (continuar);


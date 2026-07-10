/*
  Ejercicio 8: Acceso con rol
  ============================
  Crear dos variables: `rol` y `estaActivo`.

  Un usuario puede acceder al panel si:
    - Su rol es "admin", Y
    - Su cuenta está activa

  const rol = "admin";
  const estaActivo = true;

  Resultado esperado:
    Acceso permitido.

*/
let rol = "admin";

let estaActivo = true;

if (rol === "admin" && estaActivo === true) {
  console.log("Acceso permitido.");
} else {
  console.log("Acceso denegado.");
}

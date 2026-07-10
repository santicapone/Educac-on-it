/*
  Ejercicio 15: Validación de formulario
  ========================================
  Variables de base:
    const nombre = "Usuario";
    const email = "user@mail.com";
    const password = "abc123";
    const passwordConfirm = "abc123";
    const aceptaTerminos = true;

  Un formulario es válido si:
    - El nombre NO está vacío (nombre !== "")
    - El email contiene "@" → usar email.includes("@")
    - La contraseña y la confirmación coinciden (son iguales)
    - El usuario aceptó los términos

  Mostrar si el formulario es válido o no.

  Requisitos técnicos:
    - Usar && para combinar las 4 condiciones
    - Guardar el resultado en una variable booleana `formularioValido`
    - Mostrar el mensaje usando esa variable
*/

const nombre = "Usuario";
const email = "user@mail.com";
const password = "abc123";
const passwordConfirm = "abc123";
const aceptaTerminos = true;

const formularioValido =
  nombre !== "" &&
  email.includes("@") &&
  password === passwordConfirm &&
  aceptaTerminos;

if (formularioValido) {
  console.log("Formulario válido");
} else {
  console.log("Formulario no válido");
}

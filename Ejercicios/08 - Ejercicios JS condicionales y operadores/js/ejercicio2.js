/*
  ========= Ejercicio 2: Par o impar =========

  Pedir al usuario que ingrese un número entero usando prompt().
  Guardar el valor en una variable llamada `numero`.

  - Si el número es par, mostrar por consola:
    "El número X es par."

  - Si el número es impar, mostrar por consola:
    "El número X es impar."

  Pista: usá el operador módulo (%) para determinar si es par o impar.
  Recordá convertir el prompt() a número con parseInt().

  Ejemplo con numero = 8:
    El número 8 es par.

  Ejemplo con numero = 7:
    El número 7 es impar.
*/
let numero = prompt("Ingrese un número entero");
numero = parseInt(numero);

if (numero % 2 === 0) {
  console.log("El número " + numero + " es par.");
} else {
  console.log("El número " + numero + " es impar.");
}

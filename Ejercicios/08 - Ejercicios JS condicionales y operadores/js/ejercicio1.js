/*
  ========= Ejercicio 1: Mayoría de edad =========

  Pedir al usuario que ingrese su edad usando prompt().
  Guardar el valor en una variable llamada `edad`.

  - Si la edad es mayor o igual a 18, mostrar por consola:
    "Eres mayor de edad."

  - SIEMPRE, al final del programa, mostrar por consola independientemente de la edad ingresada el mensaje:
    "Gracias por usar el programa."

  Pista: recordá que prompt() devuelve un string. Usá parseInt() para convertirlo a número.

  Ejemplo con edad = 20:
    Eres mayor de edad.
    Gracias por usar el programa.

  Ejemplo con edad = 15:
    Gracias por usar el programa.
*/

let edad = prompt("Ingrese su edad");

edad = parseInt(edad);

if (edad >= 18) {
  console.log("Eres mayor de edad. ");
} else {
  console.log("Gracias por usar el programa. ");
}

/*
  Ejercicio 7: Número entre rango
  =================================
  Pedir al usuario que ingrese un número y almacenarlo en una variable `numero`.
  Crear dos variables:  `minimo` y `maximo`.

  Verificar si `numero` está dentro del rango [minimo, maximo]
  (inclusive en ambos extremos).

  
  const minimo = 40;
  const maximo = 100;

  Ejemplo el usuario ingresa 15:

  Resultado esperado:
    El número 15 no está dentro del rango.

  Requisitos técnicos:
    - Usar && para verificar ambas condiciones al mismo tiempo
    - La condición es: numero >= minimo && numero <= maximo
    - Usar template literal para incluir el número en el mensaje
*/

let numero = prompt("Ingrese un número:");

numero = parseInt(numero);

const minimo = 40;

const maximo = 100;

if (numero >= minimo && numero <= maximo) {
  console.log(`El número ${numero} está dentro del rango.`);
} else {
  console.log(`El número ${numero} no está dentro del rango.`);
}

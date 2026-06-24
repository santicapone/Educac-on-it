/*
  ============ EJERCICIO 7: PAGO EN CUOTAS ============
  Pedir al usuario que ingrese el importe de su compra.
  Pedir además la cantidad de cuotas en las que desea pagar.

  Calcular el importe de cada cuota teniendo en cuenta que el interés por realizar el pago en cuotas es del 20% sobre el importe total de la compra.

  Mostrar por consola el importe total de la compra, el interés aplicado, y el importe de cada cuota.
*/

let monto = Number(prompt("Ingrese el importe de su compra"));

let cuotas = Number(
  prompt("Ingrese el numero de cuotas en el que desea comprar"),
);

let interes = (20 / 100) * monto;

let precioFinal = monto + interes;

let pagos = precioFinal / cuotas;

console.log("El importe final es de: " + precioFinal);

console.log("El interes es de: " + interes);

console.log("Las cuotas son de: " + pagos + " en " + cuotas + " cuotas");

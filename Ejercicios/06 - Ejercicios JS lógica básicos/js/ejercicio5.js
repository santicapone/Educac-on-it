/*
========= Ejercicio 5: Precio final con IVA, ganancia y descuento =========

Crear una variable llamada `precioProducto`, otra variable llamada `ganancia` y una variable descuento con los valores que se detallan a continuación:

A. Calcular el precio final sumando un IVA del 21% al precio original, sumarle la ganancia del 40%, y mostrar el resultado por consola. 
B. Luego, calcular el precio final con un descuento del 10% y mostrar el resultado por consola.

Mostrar por consola:

El precio original es: $1000 * 1.21
El precio con IVA es: $1210
El precio final es: $1694
El precio final con descuento es: $1524.6

Calcular:
- El monto descontado
- El precio final

Mostrar por consola:
El precio final sin descuento es: $1694
El descuento es de: $169.4
El precio final es: $1524.6

Extra: Redondear el precio final a dos decimales y mostrarlo por consola.

*/

let precioProducto = 7800;

let precioIVA = precioProducto * 1.21;

let ganancia = (40 / 100) * precioIVA;

let descuento = (10 / 100) * precioIVA;

console.log("El precio original es: " + precioProducto);

console.log("El precio con IVA es: " + precioIVA);

console.log("El precio final es: " + (precioIVA + ganancia).toFixed(2));

console.log(
  "El precio final con descuento es: " +
    (precioIVA + ganancia - descuento).toFixed(2),
);
console.log("El descuento es de: " + descuento.toFixed(2));

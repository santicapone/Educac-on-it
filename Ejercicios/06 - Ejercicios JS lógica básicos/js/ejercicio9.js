/*
  ============ EJERCICIO 9: CALCULADORA DE VIAJE ============

  Pedir al usuario que ingrese:

  - La cantidad de kilómetros que va a viajar
  - Cuántos kilómetros recorre el vehículo con 1 litro de combustible
  - El precio del litro de combustible
  - La cantidad de personas que viajan

  Calcular:

  - Cuántos litros de combustible necesita para el viaje
  - Cuánto dinero gastará en combustible
  - Cuánto debería pagar cada persona si dividen el gasto en partes iguales

  Mostrar por consola:

  Kilómetros del viaje: 300 km
  Rendimiento del vehículo: 12 km por litro
  Litros necesarios: 25
  Costo total del combustible: $27500
  Costo por persona: $6875

  Mostrar también el resultado final usando alert().

  Extra:
  Redondear los litros necesarios y el costo por persona a dos decimales.
*/

let km = Number(prompt("Ingrese la cantidad de kilómetros que va a viajar"));

let kmXlitro = Number(
  prompt("Ingrese cuantos km recorre el vehiculo con 1L de combustible"),
);

let precioXlitro = Number(prompt("Ingrese el precio del litro de combustible"));

let personas = Number(
  prompt("Ingrese la cantidad de personas que van a viajar"),
);

let litrosNecesarios = km / kmXlitro;

let dineroXcombustible = litrosNecesarios * precioXlitro;

let dineroXpersona = dineroXcombustible / personas;

console.log("Kilómetros del viaje: " + km);

console.log("Rendimiento del vehículo:" + kmXlitro);

console.log("LItros necesrios " + litrosNecesarios.toFixed(2));

console.log("Costo total del combustible: " + dineroXcombustible);

console.log("Costo por persona: " + dineroXpersona.toFixed(2));

alert(
  "Kilometros del viaje: " +
    km +
    " Rendimiento: " +
    kmXlitro +
    " LItros necesrios " +
    litrosNecesarios.toFixed(2) +
    " Costo total del combustible: " +
    dineroXcombustible +
    " Costo por persona: " +
    dineroXpersona.toFixed(2),
);

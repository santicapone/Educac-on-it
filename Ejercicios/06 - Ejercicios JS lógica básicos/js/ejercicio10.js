/*
  ============ EJERCICIO 10: PRESUPUESTO MENSUAL PERSONAL ============

  Pedir al usuario que ingrese:

  - Su ingreso mensual
  - Gasto en alquiler
  - Gasto en comida
  - Gasto en transporte
  - Gasto en servicios
  - Gasto en entretenimiento

  Calcular:

  - El total de gastos mensuales
  - El dinero restante al finalizar el mes
  - El porcentaje del ingreso que fue utilizado en gastos

  Antes de mostrar el resultado, usar confirm() con el siguiente mensaje:

  ¿Deseás ver el resumen de tu presupuesto mensual?

  Guardar la respuesta en una variable llamada `quiereVerResumen`.

  Mostrar por consola:

  Ingreso mensual: $500000
  Total de gastos: $350000
  Dinero restante: $150000
  Porcentaje gastado: 70%
  ¿El usuario quiso ver el resumen?: true

  Mostrar también un alert() con el resumen del presupuesto.

  Importante:
  En este ejercicio todavía no hace falta usar if/else.
  El valor de confirm() se guarda y se muestra como true o false.

  Extra:
  Redondear el porcentaje gastado a dos decimales.
*/

let ingreso = Number(prompt("Ingrese sus ingresos mensuales"));

let alquiler = Number(prompt("Ingrese su gasto en alquiler"));

let comida = Number(prompt("Ingrese su gasto en comida"));

let transporte = Number(prompt("Ingrese su gasto en transporte"));

let servicios = Number(prompt("Ingrese su gasto en servicios"));

let entretenimiento = Number(prompt("Ingrese su gasto en entretenimiento"));

let gastosMensuales =
  alquiler + comida + transporte + servicios + entretenimiento;

let dineroRestante = ingreso - gastosMensuales;

let porcentajeGastado = (gastosMensuales * 100) / ingreso;

let quiereVerResumen = confirm("¿Deseás ver el resumen del presupuesto?");

console.log("valor del confirm " + quiereVerResumen);

console.log("RESUMEN DEL PRESUPUESTO ");
console.log("Ingreso Mensual: $" + ingreso);
console.log("Total de Gastos: $" + gastosMensuales);
console.log("Dinero Restante: $" + dineroRestante);
console.log(
  "Porcentaje del ingreso utilizado: " + porcentajeGastado.toFixed(2) + "%",
);

alert(
  "RESUMEN DEL PRESUPUESTO " +
    " Ingreso Mensual: $" +
    ingreso +
    " Total de Gastos: $" +
    gastosMensuales +
    " Dinero Restante: $" +
    dineroRestante +
    " Porcentaje del ingreso utilizado: " +
    porcentajeGastado.toFixed(2) +
    "%",
);

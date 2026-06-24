/*

Pedir al usuario que ingrese una cantidad de horas.

Calcular cuántos segundos equivalen a esa cantidad de horas.
Calcular cuántos minutos equivalen a esa cantidad de horas.

Ejemplo:

const horas = 3;

3 horas equivalen a 10800 segundos.
3 horas equivalen a 180 minutos.

*/
let horas = prompt("Ingrese una cantidad de horas");

let segundos = horas * 60 * 60;

let minutos = horas * 60;

console.log(horas + " Horas equivalen a " + segundos + " segundos");

console.log(horas + " 2Horas equivalen a " + minutos + " minutos");

/* 
========= Ejercicio 4: Promedio de notas =========
  
Crear 7 variables:

let nota1 = 8;
let nota2 = 7;
let nota3 = 10;
let nota4 = 9;
let nota5 = 6;
let nota6 = 8;
let nota7 = 7;


Calcular el promedio de las cinco notas.

Mostrar por consola:
  El promedio es: X.XX

Extra: Buscar en internet cómo redondear el resultado a dos decimales y mostrar el resultado redondeado por consola.

*/

let nota1 = 8;
let nota2 = 7;
let nota3 = 10;
let nota4 = 9;
let nota5 = 6;
let nota6 = 8;
let nota7 = 7;

let promedio = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;

console.log("El promedio sin redondear es: " + promedio);

console.log("El promedio redondeado es: " + Math.round(promedio));

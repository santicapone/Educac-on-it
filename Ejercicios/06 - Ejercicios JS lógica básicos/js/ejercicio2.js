/*
  ========= Ejercicio 2: Operaciones básicas =========
  
  Crear dos variables numéricas. Y asignarles cualquier valor. Por ejemplo: numero1 = 10; numero2 = 5;
  Calcular y mostrar por consola:

  - La suma
  - La resta
  - La multiplicación
  - La división
  - El módulo (resto de la división)

  Resultado esperado:

  Suma: 15
  Resta: 5
  Multiplicación: 50
  División: 2

  Realizar pruebas con diferentes valores para las variables numéricas y comprobar que los resultados son correctos.
*/
let numero1 = 5;

let numero2 = 2;

console.log(
  "suma entre " + numero1 + " y " + numero2 + " = " + (numero1 + numero2),
);

console.log(
  "resta entre " + numero1 + " y " + numero2 + " = " + (numero1 - numero2),
);

console.log(
  "multiplicación entre " +
    numero1 +
    " y " +
    numero2 +
    " = " +
    numero1 * numero2,
);
console.log(
  "división entre " + numero1 + " y " + numero2 + " = " + numero1 / numero2,
);

console.log(
  "módulo entre " + numero1 + " y " + numero2 + " = " + (numero1 % numero2),
);

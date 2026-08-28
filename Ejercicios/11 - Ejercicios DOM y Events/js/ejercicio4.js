// Ejercicio 4: Contador con límite
//
// Abrí ejercicio4.html. Hay un contador con dos botones (+ y -) y un <span> que
// muestra el valor actual.
//
// Implementá la lógica completa del contador:
//
// 1. Al hacer click en "+" el valor aumenta de 1 en 1. Máximo: 10.
//    Al hacer click en "−" el valor disminuye de 1 en 1. Mínimo: 0.
//    TIP: guardá el valor actual en una variable, no lo leas del DOM cada vez.
//         Modificá la variable y luego actualizá el textContent del <span>.
//
// 2. Cuando el valor llega a 0, el botón "−" se deshabilita.
//    Cuando el valor llega a 10, el botón "+" se deshabilita.
//    TIP: boton.disabled = true  →  deshabilita el botón
//         boton.disabled = false →  lo vuelve a habilitar
//
// 3. En el <p#mensaje> mostrá:
//    - "Mínimo alcanzado" cuando el valor es 0
//    - "Máximo alcanzado" cuando el valor es 10
//    - "" (vacío) en cualquier otro caso
//
// 4. Permitir que el usuario configure el máximo.
//    Hacé que el límite sea una constante definida al inicio del archivo,
//    de forma que cambiar ese único valor ajuste todo el comportamiento.

const MAXIMO = 10;
const MINIMO = 0;

let contador = 0;

const btnRestar = document.querySelector("#btn-restar");
const btnSumar = document.querySelector("#btn-sumar");
const spanValor = document.querySelector("#valor");
const pMensaje = document.querySelector("#mensaje");

function actualizarUI() {
  spanValor.textContent = contador;

  btnRestar.disabled = contador === MINIMO;
  btnSumar.disabled = contador === MAXIMO;

  if (contador === MINIMO) {
    pMensaje.textContent = "Mínimo alcanzado";
  } else if (contador === MAXIMO) {
    pMensaje.textContent = "Máximo alcanzado";
  } else {
    pMensaje.textContent = "";
  }
}

btnSumar.addEventListener("click", () => {
  if (contador < MAXIMO) {
    contador++;
    actualizarUI();
  }
});

btnRestar.addEventListener("click", () => {
  if (contador > MINIMO) {
    contador--;
    actualizarUI();
  }
});

actualizarUI();

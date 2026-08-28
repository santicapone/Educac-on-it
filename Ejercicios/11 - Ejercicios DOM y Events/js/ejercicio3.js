// Ejercicio 3: dataset — leer y escribir atributos data-*
//
// Abrí ejercicio3.html. El HTML tiene 4 tarjetas de productos.
// Cada tarjeta tiene atributos data-id, data-categoria y data-precio.
//
// 1. Seleccioná TODOS los elementos con clase "producto" usando querySelectorAll.
//    Recorrelos con forEach y mostrá en consola, para cada uno:
//       id: 1 | categoría: electronica | precio: 45000
//    TIP: para leer un atributo data-* usás: elemento.dataset.nombreAtributo
//         data-categoria  →  elemento.dataset.categoria
//         data-precio     →  elemento.dataset.precio
//
// 2. Usando filter (sobre un array convertido con Array.from o spread),
//    encontrá todos los productos de categoría "electronica".
//    Mostrá cuántos hay en el <div#resultado>:
//       "Hay 2 productos de electrónica"
//    TIP: Array.from(nodelist) convierte la NodeList en un array real
//         para poder usar filter, map, etc. O también: [...nodelist] hace exactamente lo mismo usando spread.
//
// 3. Encontrá el producto más caro leyendo data-precio de cada tarjeta.
//    Agregale la clase "destacado" (que ya está definida en el CSS).
//    TIP: los valores de dataset siempre son strings — necesitás convertirlos
//         a número con Number() o parseFloat() antes de comparar

const productosNodeList = document.querySelectorAll(".producto");

productosNodeList.forEach((producto) => {
  const id = producto.dataset.id;
  const categoria = producto.dataset.categoria;
  const precio = producto.dataset.precio;

  console.log(`id: ${id} | categoría: ${categoria} | precio: ${precio}`);
});

const productosArray = Array.from(productosNodeList);

const electronica = productosArray.filter(
  (producto) => producto.dataset.categoria === "electronica",
);

const divResultado = document.querySelector("#resultado");
divResultado.textContent = `Hay ${electronica.length} productos de electrónica`;

let productoMasCaro = null;
let precioMaximo = 0;

productosArray.forEach((producto) => {
  const precio = Number(producto.dataset.precio);

  if (precio > precioMaximo) {
    precioMaximo = precio;
    productoMasCaro = producto;
  }
});

if (productoMasCaro) {
  productoMasCaro.classList.add("destacado");
}

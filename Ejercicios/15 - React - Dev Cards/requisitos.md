# Ejercicio 15 — Dev Cards

Construí una aplicación en **React + Vite** que muestre tarjetas de perfil de desarrolladores a partir de un array de datos.

---

## Antes de empezar

### Crear el proyecto

```bash
npm create vite@latest
```

Cuando te pregunte:
- **Framework**: React
- **Variant**: JavaScript + SWC

Luego:

```bash
cd nombre-del-proyecto
npm install
npm run dev
```

### Limpiar el boilerplate

Vite genera archivos de ejemplo que no vas a usar. Antes de arrancar:

- Vaciá `App.jsx` — dejalo con un componente vacío que retorne un `<div>`
- Eliminá el contenido de `App.css` e `index.css` (o borrálos si no los vas a usar)
- Eliminá `assets/react.svg` y `public/vite.svg`

### Agregar Bootstrap y Font Awesome

En el `index.html` del proyecto (está en la raíz, no en `src/`), agregá los CDN de Bootstrap y Font Awesome en el `<head>`.

---

## Recomendaciones

Es conveniente que creen primero los componentes más simples, tal como el componente header, el componente title y footer, antes de pasar a los componentes más complejos como `Card` y `CardList`.

## Datos

Creá un archivo `src/data/devs.js` que exporte un array con al menos **6 desarrolladores ficticios**. Cada uno debe tener:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | número | Identificador único |
| `nombre` | string | Nombre completo |
| `rol` | string | Ej: "Desarrollador", "Diseñador UX" |
| `stack` | string | `"Frontend"`, `"Backend"` o `"Fullstack"` |
| `skills` | array de strings | Tecnologías que maneja |
| `disponible` | booleano | Si está disponible para proyectos |
| `github` | string o `null` | URL del perfil de GitHub, o `null` si no tiene |
| `avatar` | string | URL de una imagen de perfil |

> 💡 Para los avatares podés usar `https://i.pravatar.cc/150?img=1` cambiando el número final (del 1 al 70).

---

## Tareas

### Tarea 1 — Componente `Title`

Creá un componente que reciba un texto principal y opcionalmente un subtítulo. Si el subtítulo no se pasa como prop, no debe renderizarse nada en su lugar.

Este componente lo vas a reutilizar en distintas partes de la app: dentro del header, antes del listado de cards, y en el footer.

> 💡 Un componente es reutilizable cuando su contenido viene de props, no hardcodeado adentro.

---

### Tarea 2 — Componente `Header`

Creá un componente de encabezado que use el componente `Title` con el nombre de la app y un subtítulo descriptivo.

---

### Tarea 3 — Componente `Card`

Creá un componente que reciba un desarrollador como prop y muestre su información. Debe incluir:

- Avatar, nombre y rol
- Badge de stack con **color diferente** según el valor (`Frontend`, `Backend`, `Fullstack`)
- Lista de skills (solo si tiene al menos una)
- Estado de disponibilidad (siempre se muestra, pero cambia según el valor)
- Ícono de GitHub con link (solo si tiene cuenta vinculada)

Para el color del badge usá un ternario encadenado:
```
¿es Frontend? → color A : ¿es Backend? → color B : color C
```

> 💡 En JSX las clases se asignan con `className`, no con `class`.

> 💡 Para el ícono de GitHub podés usar Font Awesome: `fa-brands fa-github`.

---

### Tarea 4 — Componente `CardList`

Creá un componente que reciba el array de devs y se encargue de renderizar una `Card` por cada elemento. Usá `Title` para mostrar un título antes del listado.

> 💡 Cuando renderizás una lista en React, cada elemento necesita una prop `key` única. React la usa internamente — no aparece en el HTML.

---

### Tarea 5 — Componente `Footer`

Creá un componente de pie de página que use `Title` con un texto distinto al del header. Puede ser simple, no necesita mucho contenido.

---

### Tarea 6 — Ensamblar en `App.jsx`

Importá el array de devs y todos los componentes. Componé la app pasando los datos necesarios a cada componente como props.

> 💡 `App.jsx` debería ser el único lugar donde importás los datos. Los componentes solo reciben lo que necesitan por props, no acceden al array directamente.

---

## Estructura sugerida de archivos

```
src/
├── App.jsx
├── main.jsx
├── data/
│   └── devs.js
└── components/
    ├── Header.jsx
    ├── Title.jsx
    ├── CardList.jsx
    ├── Card.jsx
    └── Footer.jsx
```

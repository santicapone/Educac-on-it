# Requisitos del Proyecto - Gaming Zone

## Objetivo

Crear una landing page para "Gaming Zone" utilizando HTML y CSS, aplicando los conceptos de formularios y box model vistos en clase.

---

## 1. Paleta de Colores

Utiliza las siguientes variables CSS para mantener consistencia en los colores:

| Variable             | Color     | Uso                                                   |
| -------------------- | --------- | ----------------------------------------------------- |
| `--primary-color`    | `#0055af` | Color principal (títulos h2, botones, sección inicio) |
| `--secondary-color`  | `#121212` | Color secundario (header, footer, bordes)             |
| `--background-color` | `#f8f9fa` | Fondo del body                                        |
| `--text-color`       | `#212529` | Color del texto principal                             |
| `--text-color-light` | `#fff`    | Color del texto claro                                 |

---

## 2. Tipografía

- **Fuente principal**: `'Arial', sans-serif`
- **Variable CSS**: `--font-family`
- Aplicar a todo el documento mediante `font-family: var(--font-family)`

---

## 3. Estructura y Dimensiones

### Body

- `margin: 0`
- `padding: 0`
- `background-color: var(--background-color)`
- `color: var(--text-color)`
- `box-sizing: border-box` (aplicado a todos los elementos con `*`)

### Header (.site-header)

- `background-color: var(--secondary-color)`
- `color: #fff`
- `padding: 10px 0`
- `text-align: center`

### Logo

- **Clase**: `.logo`
- `width: 70px`
- `height: 70px`
- **Ubicación**: `/assets/images/logo.png`

### Navegación (nav)

- Enlaces con `color: var(--text-color-light)`
- **Hover**: `color: var(--primary-color)` con transición de `0.25s`

### Main Container

- `width: 100%`
- `max-width: 1200px`
- `margin: 0 auto` (centrado)

---

## 4. Secciones Específicas

### Sección Juegos (#menu)

#### Imágenes de juegos

- `width: 100%`
- `height: 400px`
- **Ubicación**: `/assets/images/1.avif` y `/assets/images/2.avif`

---

## 5. Formulario de Contacto (#contacto)

### Contenedor del formulario

- `width: 500px`
- `max-width: 100%`
- `margin: 0 auto` (centrado)

### Campos del formulario

#### Labels

- `display: block`
- `margin-bottom: 5px`

#### Inputs y textarea

- `font-size: 16px`
- `width: 100%`

## 6. Sección Servicios (#servicios)

## 9. Contenido a incluir

### Header

- Logo (imagen)
- Navegación con 4 enlaces: Inicio, Juegos, Contacto, Servicios

### Sección Inicio (#inicio)

- Título h1: "Bienvenido a Gaming Zone"
- Párrafo de bienvenida

### Sección Juegos (#menu)

- Título h2: "Juegos Destacados"
- 2 artículos de juegos con:
  - Título h3
  - Imagen
  - Descripción (2-3 párrafos)
  - Disponibilidad
  - Precio
  - Botón "Comprar"

### Sección Contacto (#contacto)

- Título h2: "Contacto"
- Formulario con:
  - Campo nombre (text, required)
  - Campo email (email, required)
  - Campo mensaje (textarea, required)
  - Botón submit "Enviar"

### Sección Servicios (#servicios)

- Título h2: "Servicios"
- Párrafo descriptivo
- Lista con 4 servicios

### Footer

- Texto de copyright

---

## 10. Archivos necesarios

```
proyecto/
├── index.html
├── /css/styles.css
└── assets/
    └── images/
        ├── logo.png
        ├── 1.avif
        └── 2.avif
```

---

## Criterios de Evaluación

- [ ] Estructura HTML semántica correcta
- [ ] Uso apropiado de etiquetas (header, nav, main, section, article, footer)
- [ ] Formulario funcional con tipos de input correctos
- [ ] Aplicación correcta de los colores especificados
- [ ] Dimensiones de elementos según especificaciones
- [ ] Box model correctamente aplicado (padding, margin, border)
- [ ] Border-radius aplicado a elementos según especificaciones
- [ ] Estilos de tipografía correctos
- [ ] Botones con estados hover
- [ ] Layout responsivo con max-width en el contenedor principal

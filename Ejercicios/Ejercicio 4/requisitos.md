# Requisitos del Proyecto - Comida Saludable

## Objetivo

Crear una landing page para "Comida Saludable" utilizando HTML y CSS, aplicando los conceptos de **position**, **tablas**, **multimedia**, **display flex** y opcionalmente **media queries** vistos en clase.

---

## 1. Paleta de Colores

Utiliza las siguientes variables CSS para mantener consistencia en los colores:

| Variable                       | Color                  | Uso                                            |
| ------------------------------ | ---------------------- | ---------------------------------------------- |
| `--primary-color`              | `#002112`              | Color principal                                |
| `--secondary-color`            | `#27AE61`              | Bordes, encabezados de tabla                   |
| `--text-color`                 | `white`                | Color del texto principal                      |
| `--accent-color`               | `#84d914`              | Acentos (hover en navegación, títulos h3 span) |
| `--background-color`           | `#00341d`              | Fondo del body                                 |
| `--background-secondary-color` | `#121212`              | Fondo de secciones alternativas y footer       |
| `--font-family`                | `'Nunito', sans-serif` | Fuente principal                               |

---

## 2. Tipografía

- **Fuente principal**: Nunito (importar desde Google Fonts)
- **Importación**: `@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap')`
- Aplicar mediante variable CSS `--font-family`

---

## 3. Elementos Clave

### Logo

- **Clase**: `.logo`
- `width: 50px`
- `height: 50px`
- **Ubicación**: `/assets/images/logo.webp`

### Navegación

- Debe ser una lista horizontal (💡 _sugerencia: usar `display: flex`_)
- Color de hover en enlaces: `var(--accent-color)`

---

## 4. Secciones Específicas

### Sección Hero (#hero) - **Position y Multimedia**

💡 **Pista**: Usa `position` para superponer el banner sobre el video

#### Video Hero (.hero-video)

- **Elemento**: `<video>` con atributos `autoplay`, `muted`, `loop`, `playsinline`
- **Ubicación**: `/assets/video/hero.mp4`
- Debe cubrir todo el contenedor (💡 _sugerencia: `object-fit`_)

#### Banner Content (.banner-content)

- Debe estar centrado horizontalmente sobre el video
- Fondo semi-transparente: `rgba(0, 0, 0, 0.65)`

---

### Sección Info (#info) - **Display Flex**

💡 **Pista**: Crea un layout de dos columnas (texto e imagen) usando Flexbox

#### Contenedor (.section-wrapper)

- `max-width: 1200px`

#### Imagen de Info

- **Ubicación**: `/assets/images/info.avif`

---

### Sección Products (#products) - **Display Flex**

💡 **Pista**: Crea un layout de tarjetas que se adapte al espacio disponible

- Fondo: `var(--background-secondary-color)`

#### Tarjetas de Producto (.product-card)

- `width: 300px`
- Bordes: `var(--secondary-color)`
- Títulos h3: `var(--accent-color)`

##### Imágenes de productos

- `height: 200px`
- **Ubicaciones**:
  - `/assets/images/desayuno.jpg`
  - `/assets/images/almuerzo.jpg`
  - `/assets/images/cena.jpg`
  - `/assets/images/snacks.webp`

---

### Sección Benefits (#benefits) - **Tablas**

💡 **Pista**: Crea una tabla HTML y estilízala con CSS

#### Tabla

- Encabezados (th): fondo `var(--secondary-color)`, color `var(--text-color)`
- Bordes: `var(--secondary-color)`
- Filas alternas con un tono de verde claro: `rgba(39, 174, 97, 0.1)`

---

### Footer - **Display Flex**

💡 **Pista**: Distribuye las dos secciones del footer usando Flexbox

- Fondo: `var(--background-secondary-color)`

---

## 5. Media Queries (Opcional - Desafío Extra)

💡 **Desafío**: Haz que el diseño sea responsive para pantallas menores a 520px

Sugerencias:

- Cambia layouts de fila a columna donde sea necesario
- Ajusta el footer para visualización vertical

---

## 6. Contenido a incluir

### Header

- Logo (imagen)
- Título h1: "Comida **Saludable**" (con span en "Saludable")
- Navegación con 4 enlaces: Desayuno, Almuerzo, Cena, Snacks

### Sección Hero (#hero)

- Video de fondo con reproducción automática
- Banner con:
  - Título h2: "Bienvenido a Comida Saludable"
  - 2 párrafos de descripción

### Sección Info (#info)

- Título h2: "Recetas Destacadas"
- 3 párrafos de contenido
- Imagen ilustrativa

### Sección Products (#products)

- 4 tarjetas de producto con:
  - Imagen
  - Título h3
  - Párrafo descriptivo

### Sección Benefits (#benefits)

- Título h2: "Beneficios de Comer Saludable"
- Tabla con 2 columnas (Beneficio y Descripción)
- 5 filas de contenido

### Footer

- Sección de contacto (#contacto) con:
  - Título h2: "Contacto"
  - Párrafo
  - Lista con 3 items (email, teléfono, dirección)
- Sección de derechos (#derechos) con:
  - Logo
  - Título h1
  - Copyright

---

## 7. Resultado Esperado

**Consulta las imágenes de referencia para ver el resultado esperado:**

- 📸 `example1.png` - Vista desktop completa
- 📸 `example2.png` - Vista mobile (responsive)

Estas imágenes te mostrarán cómo debe verse tu proyecto terminado. Úsalas como guía visual para tu implementación.

---

## 8. Archivos necesarios

```
proyecto/
├── index.html
├── css/
│   └── styles.css
├── assets/
│   ├── images/
│   │   ├── logo.webp
│   │   ├── info.avif
│   │   ├── desayuno.jpg
│   │   ├── almuerzo.jpg
│   │   ├── cena.jpg
│   │   └── snacks.webp
│   └── video/
│       └── hero.mp4

```

---

## Criterios de Evaluación

### HTML (25 puntos)

- [ ] Estructura HTML semántica correcta (header, nav, main, section, footer)
- [ ] Video HTML5 con atributos correctos (autoplay, muted, loop, playsinline)
- [ ] Tabla HTML correctamente estructurada (thead, tbody, th, td)
- [ ] Uso apropiado de clases e IDs

### CSS - Variables y Estructura

- [ ] Variables CSS declaradas y utilizadas correctamente
- [ ] Fuente Google Fonts importada y aplicada
- [ ] Colores según paleta especificada

### CSS - Position

- [ ] Uso correcto de `position` en la sección hero
- [ ] Banner correctamente posicionado sobre el video
- [ ] Video ocupa todo el contenedor hero

### CSS - Display Flex

- [ ] Navegación horizontal implementada con Flexbox
- [ ] Sección info con layout de 2 columnas
- [ ] Contenedor de productos responsive con Flexbox
- [ ] Footer con distribución horizontal

### CSS - Tablas

- [ ] Tabla estilizada correctamente
- [ ] Estilos diferentes para th y td
- [ ] Filas alternas con color de fondo

### CSS - Multimedia

- [ ] Video de fondo funcionando correctamente
- [ ] Imágenes con dimensiones y proporción adecuadas

### CSS - General

- [ ] Box model correctamente aplicado
- [ ] Transiciones y efectos hover implementados

### Media Queries (Opcional)

- [ ] Media query implementada para móviles
- [ ] Layout responsive funcional
- [ ] Cambios de dirección en Flexbox apropiados

---

## Conceptos que debes aplicar

- ✅ **Position**: Para superponer elementos (banner sobre video)
- ✅ **Tablas**: Crear y estilizar una tabla HTML
- ✅ **Multimedia**: Video HTML5 y múltiples imágenes
- ✅ **Display Flex**: Layouts flexibles y responsive
- ✅ **Media Queries** (Opcional): Adaptación a diferentes tamaños de pantalla

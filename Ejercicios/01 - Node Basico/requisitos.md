# Ejercicio 01 — Node.js Básico

Antes de construir servidores y APIs, necesitás entender en qué entorno estás parado. Este ejercicio te introduce a Node.js como plataforma de ejecución: cómo correr código JavaScript fuera del navegador, qué herramientas tenés disponibles y en qué se diferencia del JS que ya conocés.

---

## ¿Qué es Node.js?

Node.js es un entorno de ejecución de JavaScript construido sobre el motor V8 de Chrome. Te permite correr JS en cualquier lugar — en tu computadora, en un servidor — sin necesidad de un navegador.

Lo que cambia respecto al JS del browser:

| Browser | Node.js |
|---------|---------|
| Tiene `window`, `document`, `localStorage` | No existe nada de eso |
| No puede acceder al sistema de archivos | Puede leer y escribir archivos |
| Corre en un contexto de seguridad restringido | Tiene acceso completo al sistema operativo |
| Recibe el código desde un servidor | Ejecuta archivos locales directamente |

---

## Configuración inicial

### Verificar que tenés Node instalado

```bash
node --version
npm --version
```

Si no tenés Node, descargalo desde [https://nodejs.org](https://nodejs.org) (versión LTS).

### Crear el proyecto

```bash
mkdir node-basico
cd node-basico
npm init -y
```

`npm init -y` crea el archivo `package.json` con valores por defecto. Este archivo describe tu proyecto y sus dependencias.

### Crear un `.gitignore`

Creá un archivo `.gitignore` en la raíz con este contenido:

```
node_modules/
.env
```

> 💡 `node_modules/` nunca se sube a un repositorio — puede pesar cientos de MB. Cualquiera que clone el proyecto lo regenera con `npm install`. El `.env` tampoco se sube porque contiene información sensible.

---

## Tareas

### Tarea 1 — Tu primer script

Creá un archivo `01-hola.js`. Para ejecutarlo:

```bash
node 01-hola.js
```

**JS es JS** — lo primero que tenés que comprobar es que todo lo que sabés de JavaScript funciona igual en Node. En el mismo archivo:

- Declará variables con `const` y `let`, asignales valores de distintos tipos e imprimilos con `console.log`
- Realizá al menos una operación matemática e imprimí el resultado
- Creá un objeto con al menos tres propiedades e imprimilo
- Creá un array con al menos cuatro elementos, recorrélo con `.map()` o `.forEach()` e imprimí cada valor

**La diferencia con el browser** — una vez que comprobaste que JS funciona igual, explorá lo que Node agrega. Imprimí en consola:
- La versión de Node que estás usando → `process.version`
- El sistema operativo donde corre → `process.platform`
- El directorio desde donde se ejecutó el script → `process.cwd()`
- Los argumentos con los que fue llamado → `process.argv`

Probá correr el script pasándole argumentos y observá qué aparece en `process.argv`:
```bash
node 01-hola.js hola mundo
```

> 💡 `process` es el equivalente de `window` en Node — el objeto global siempre disponible. La diferencia clave: en el browser `window` tiene `document`, `localStorage`, `alert`. En Node no existe nada de eso, pero `process` te da acceso al entorno de ejecución, al sistema operativo y a los argumentos con los que se llamó el script.

---

### Tarea 2 — Sistema de módulos

Node usa un sistema de módulos para separar el código en archivos. Cada archivo es un módulo independiente — las variables y funciones que definís no "se escapan" a otros archivos a menos que las exportes explícitamente.

Creá un archivo `utils/matematica.js` que exporte las cuatro operaciones matemáticas básicas: suma, resta, multiplicación y división.

```js
function sumar(a, b) { ... }
// ...
module.exports = { sumar, restar, multiplicar, dividir }
```

Luego creá `02-modulos.js` que las importe todas y las use con distintos valores, imprimiendo el resultado de cada operación:

```js
const { sumar, restar, multiplicar, dividir } = require('./utils/matematica')
```

Asegurate de contemplar el caso de división por cero dentro de la función `dividir` — retorná un mensaje claro en lugar de `Infinity`.

> 💡 `require` con `'./'` indica que el módulo está en el proyecto (ruta relativa). Sin `'./'`, Node busca en `node_modules`. Probá hacer `require('fs')` — ese es un módulo nativo que viene con Node, no necesitás instalarlo ni declarar ninguna ruta.

---

### Tarea 3 — Variables de entorno con `dotenv`

Las variables de entorno son valores de configuración que viven fuera del código: API keys, URLs de bases de datos, puertos, contraseñas. Nunca se hardcodean en el código.

Instalá la dependencia:

```bash
npm install dotenv
```

Creá un archivo `.env` en la raíz:

```
PORT=3000
APP_NAME=Mi App Node
AUTOR=TuNombre
```

Creá `03-dotenv.js` que cargue las variables e imprima sus valores:

```js
require('dotenv').config()

console.log(process.env.PORT)
console.log(process.env.APP_NAME)
```

Luego intentá imprimir una variable que no existe en el `.env`. ¿Qué devuelve?

> 💡 `dotenv` lee el archivo `.env` y carga cada par `CLAVE=VALOR` dentro de `process.env`. Sin llamar a `dotenv.config()`, esas variables no están disponibles. El orden importa: llamalo antes de cualquier código que las use.

---

### Tarea 4 — Módulo `path`

El módulo `path` resuelve un problema concreto: las rutas de archivos se escriben diferente en Windows (`\`) y en Unix/Mac (`/`). Si hardcodeás una ruta, tu código puede romperse en otro sistema operativo.

Creá `04-path.js` y trabajá con el módulo nativo `path`:

```js
const path = require('path')
```

Imprimí en consola:
- El directorio del archivo actual usando `__dirname`
- El nombre del archivo actual usando `__filename`
- La unión de varias partes de ruta con `path.join()`
- La extensión de distintos nombres de archivo con `path.extname()`
- El nombre del archivo sin extensión con `path.basename()`

Construí una ruta hacia un archivo imaginario `datos/usuarios.json` usando `path.join(__dirname, 'datos', 'usuarios.json')` e imprimila.

`path.join` es mejor que escribir el string a mano por dos razones concretas:
- **Portabilidad**: en Windows las rutas usan `\` y en Mac/Linux usan `/`. Si hardcodeás `'datos/usuarios.json'`, tu código puede romperse según el sistema operativo. `path.join` elige el separador correcto automáticamente.
- **Rutas absolutas**: concatenar `__dirname` con `path.join` garantiza que la ruta funciona sin importar desde qué directorio ejecutes el script. Un string relativo como `'./datos/usuarios.json'` depende de desde dónde corrés `node`, no de dónde está el archivo.

> 💡 `__dirname` y `__filename` son variables que Node inyecta automáticamente en cada módulo. Siempre contienen la ruta absoluta del directorio y del archivo actual respectivamente.

---

### Tarea 5 — Módulo `fs` (File System)

`fs` te permite interactuar con el sistema de archivos: leer, escribir, crear y eliminar archivos y directorios.

Creá `05-fs.js` y realizá las siguientes operaciones usando estas variables como contenido:

```js
const contenidoInicial = `Nota 1: Aprender Node.js
Nota 2: Practicar módulos nativos
Nota 3: Entender el sistema de archivos`

const contenidoExtra = `\nNota 4: Esta línea fue agregada después`
```

**Escribir un archivo:**
Usá `fs.writeFileSync` para crear `datos/notas.txt` con `contenidoInicial`.

**Leer un archivo:**
Usá `fs.readFileSync` para leer el archivo que acabás de crear e imprimí su contenido en consola.

**Agregar contenido sin sobreescribir:**
Usá `fs.appendFileSync` para agregar `contenidoExtra` al final del archivo. Volvé a leerlo e imprimilo para verificar que se agregó correctamente.

**Verificar si existe:**
Usá `fs.existsSync` para verificar si el archivo existe antes de intentar leerlo. Probalo también con una ruta de un archivo que no existe.

**Leer un directorio:**
Usá `fs.readdirSync` para listar los archivos dentro de la carpeta `datos/` e imprimí el resultado.

**Opcional — Borrar un archivo:**
`fs` también permite eliminar archivos con `fs.unlinkSync`. Probalo una vez para ver que funciona, pero dejá la línea comentada para que el archivo no se borre cada vez que corras el script:

```js
// fs.unlinkSync(path.join(__dirname, 'datos', 'notas.txt'))
```

> 💡 Los métodos que terminan en `Sync` son síncronos — bloquean la ejecución hasta terminar. Node también tiene versiones asíncronas (`fs.readFile`, `fs.writeFile`) con callbacks. En scripts simples los síncronos son más claros; en servidores casi siempre preferís los asíncronos para no bloquear.

---

### Tarea 6 — Módulo `os`

El módulo `os` expone información sobre el sistema operativo donde corre Node.

Creá `06-os.js` e imprimí:
- El sistema operativo (`os.platform()`)
- La arquitectura del procesador (`os.arch()`)
- La cantidad de memoria total y libre (`os.totalmem()`, `os.freemem()`)
- El directorio home del usuario (`os.homedir()`)
- El hostname de la máquina (`os.hostname()`)
- La cantidad de núcleos del procesador (`os.cpus().length`)

Convertí los bytes de memoria a gigabytes para que sea legible.

> 💡 Este módulo es útil cuando tu aplicación necesita adaptarse al entorno donde corre — por ejemplo, para definir rutas de archivos temporales, o para loggear información del servidor en producción.

---

### Tarea 7 — Módulo `readline`

`readline` permite leer input del usuario desde la terminal. Es útil para crear scripts interactivos.

Para usarlo necesitás crear una **interfaz** que conecte la entrada estándar (`stdin`) con la salida estándar (`stdout`). Una vez creada, podés hacerle preguntas al usuario con `rl.question` y recibir la respuesta en un callback. Cuando termines, tenés que cerrar la interfaz con `rl.close()`, de lo contrario el proceso nunca termina.

```js
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('¿Cómo te llamás? ', (nombre) => {
  console.log(`Hola, ${nombre}! Bienvenido a Node.js`)
  rl.close()
})
```

---

Creá `07-readline.js` con el siguiente ejercicio: pedile al usuario que ingrese su fecha de nacimiento en formato `DD/MM/AAAA` y calculá e imprimí su edad actual.

Algunas pistas:
- Podés separar el string de la fecha con `.split('/')`
- Para obtener el año actual usá `new Date().getFullYear()`
- Considerá si ya cumplió años en el año en curso o no para que el cálculo sea preciso

> 💡 `rl.question` trabaja con callbacks. Si necesitás hacer varias preguntas en secuencia, cada una va anidada dentro del callback de la anterior. Para evitar el anidamiento podés envolver `rl.question` en una `Promise` y usar `async/await` — es un buen desafío si terminás antes.

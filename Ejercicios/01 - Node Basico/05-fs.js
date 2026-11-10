const fs = require('fs')
const path = require('path')

const contenidoInicial = `Nota 1: Aprender Node.js
Nota 2: Practicar módulos nativos
Nota 3: Entender el sistema de archivos`

const contenidoExtra = `\nNota 4: Esta línea fue agregada después`

const carpetaDatos = path.join(__dirname, 'datos')
if (!fs.existsSync(carpetaDatos)) {
  fs.mkdirSync(carpetaDatos)
}

const rutaNotas = path.join(carpetaDatos, 'notas.txt')

fs.writeFileSync(rutaNotas, contenidoInicial)
console.log('Archivo creado:', rutaNotas)

console.log('\n--- Contenido inicial ---')
console.log(fs.readFileSync(rutaNotas, 'utf8'))

fs.appendFileSync(rutaNotas, contenidoExtra)
console.log('--- Después de appendFileSync ---')
console.log(fs.readFileSync(rutaNotas, 'utf8'))

console.log('--- existsSync ---')
console.log('notas.txt existe:', fs.existsSync(rutaNotas))
console.log('inexistente.txt existe:', fs.existsSync(path.join(carpetaDatos, 'inexistente.txt')))

console.log('\n--- Archivos en datos/ ---')
console.log(fs.readdirSync(carpetaDatos))

// fs.unlinkSync(path.join(__dirname, 'datos', 'notas.txt'))

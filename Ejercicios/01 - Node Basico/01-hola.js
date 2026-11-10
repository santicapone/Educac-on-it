const lenguaje = 'JavaScript'
let edad = 25
const activo = true
let precio = 199.99
const nada = null

console.log('--- Variables ---')
console.log('Lenguaje:', lenguaje)
console.log('Edad:', edad)
console.log('Activo:', activo)
console.log('Precio:', precio)
console.log('Nada:', nada)

const suma = 15 + 27
const producto = 6 * 7
console.log('\n--- Matemática ---')
console.log('15 + 27 =', suma)
console.log('6 * 7 =', producto)

const persona = {
  nombre: 'Santi',
  edad: 25,
  ocupacion: 'Estudiante de Node.js'
}
console.log('\n--- Objeto ---')
console.log(persona)

const notas = ['Aprender Node.js', 'Practicar módulos', 'Usar la consola', 'Divertirse']
console.log('\n--- Array con forEach ---')
notas.forEach((nota, indice) => {
  console.log(`Nota ${indice + 1}: ${nota}`)
})

console.log('\n--- Array con map ---')
const notasEnMayuscula = notas.map((nota) => nota.toUpperCase())
notasEnMayuscula.forEach((nota) => console.log(nota))

console.log('\n--- process ---')
console.log('Versión de Node:', process.version)
console.log('Sistema operativo:', process.platform)
console.log('Directorio de ejecución:', process.cwd())
console.log('Argumentos:', process.argv)

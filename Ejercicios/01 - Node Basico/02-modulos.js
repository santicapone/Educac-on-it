const { sumar, restar, multiplicar, dividir } = require('./utils/matematica')

console.log('sumar(10, 5) =', sumar(10, 5))
console.log('restar(10, 5) =', restar(10, 5))
console.log('multiplicar(10, 5) =', multiplicar(10, 5))
console.log('dividir(10, 5) =', dividir(10, 5))
console.log('dividir(10, 0) =', dividir(10, 0))

console.log('\nCon otros valores:')
console.log('sumar(100, 250) =', sumar(100, 250))
console.log('multiplicar(7, 8) =', multiplicar(7, 8))
console.log('dividir(144, 12) =', dividir(144, 12))
console.log('dividir(3.5, 0) =', dividir(3.5, 0))

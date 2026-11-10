const path = require('path')

console.log('__dirname:', __dirname)
console.log('__filename:', __filename)

const rutaUnida = path.join(__dirname, 'utils', 'matematica.js')
console.log('\npath.join:', rutaUnida)

console.log('\n--- path.extname ---')
console.log('script.js ->', path.extname('script.js'))
console.log('datos.json ->', path.extname('datos.json'))
console.log('notas.txt ->', path.extname('notas.txt'))
console.log('index.html ->', path.extname('index.html'))
console.log('sin-extension ->', path.extname('sin-extension'))

console.log('\n--- path.basename ---')
console.log('notas.txt ->', path.basename('/a/b/notas.txt'))
console.log('sin extensión ->', path.basename('/a/b/notas.txt', '.txt'))

const rutaUsuarios = path.join(__dirname, 'datos', 'usuarios.json')
console.log('\nRuta a datos/usuarios.json:', rutaUsuarios)

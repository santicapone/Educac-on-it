const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('¿Cuál es tu fecha de nacimiento (DD/MM/AAAA)? ', (fechaNacimiento) => {
  const [dia, mes, anio] = fechaNacimiento.split('/').map(Number)

  const hoy = new Date()
  let edad = hoy.getFullYear() - anio

  const mesActual = hoy.getMonth() + 1
  const diaActual = hoy.getDate()
  const yaCumplio = mesActual > mes || (mesActual === mes && diaActual >= dia)

  if (!yaCumplio) {
    edad--
  }

  console.log(`Tenés ${edad} años.`)

  rl.close()
})

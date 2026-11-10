const os = require('os')

const bytesAGigabytes = (bytes) => (bytes / 1024 / 1024 / 1024).toFixed(2)

console.log('Sistema operativo:', os.platform())
console.log('Arquitectura:', os.arch())
console.log('Memoria total:', bytesAGigabytes(os.totalmem()), 'GB')
console.log('Memoria libre:', bytesAGigabytes(os.freemem()), 'GB')
console.log('Directorio home:', os.homedir())
console.log('Hostname:', os.hostname())
console.log('Núcleos del procesador:', os.cpus().length)

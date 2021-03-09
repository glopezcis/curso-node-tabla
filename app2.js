const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

// Ver argumentos de un comando de consola
console.log(process.argv);
const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');

crearArchivo(base)
  .then(archivo => console.log(archivo, 'creado!'))
  .catch(err => console.log(err));



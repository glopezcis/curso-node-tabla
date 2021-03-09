const argv = require('yargs')
                .option('b', {
                  alias: 'base',
                  type:'number',
                  demandOption: true,
                  describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                  alias: 'listar',
                  type: 'boolean',
                  default: false,
                  describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                  alias: 'hasta',
                  type:'number',
                  default: 10,
                  describe: 'Es el nro límite de la tabla de multiplicar'
                })
                .check((argv, options) => {
                  console.log('yargs', argv);
                  if (isNaN(argv.b)) {
                    throw 'La base debe ser un número!';
                  }
                  if (isNaN(argv.h)) {
                    throw 'El hasta debe ser un número!';
                  }
                  return true;  
                })
                .argv;

module.exports = argv;              
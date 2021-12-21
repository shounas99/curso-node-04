const argv = require ('yargs')
    .option('b',{
        alias: 'numTabla',
        type: 'number',
        demandOption: 'true',
        describe:'Base de la tabla multiplicar'
    })//con check verifico que se cumpla, sino no se ejecutara lo siguiente
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'Muestra tabla en consola'
    })
    .option('h', {
        alias: 'limite',
        type: 'number',
        default: 10,
        describe:'Limite de lo que mostrara en mi tabla de multiplicar'
    })
    .check((argv, options) =>{
        if( isNaN( argv.b )){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;
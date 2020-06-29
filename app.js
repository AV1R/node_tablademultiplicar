//requireds
// const fs = require('fs');
// const fs = require('express'); externos a node
// const fs = require('./fs'); creados por nosostros 

const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar.js');
var colors = require('colors');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar'.cyan);
        listarTabla(argv.base, argv.limite);
        console.log(`TABLA LISTADA EXITOSAMENTE`.green)

        break;
    case 'crear':
        console.log('Crear'.cyan);
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`.green)).catch(err => console.log(err));

        break;
    default:
        console.log('Comando no reconocido'.red);
        break;
}
// console.log(process.argv);
// let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log('Limite', argv.limite);
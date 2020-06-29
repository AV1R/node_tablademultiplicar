const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite) => {
    console.log('==============================================================='.green);
    console.log(`====TABLA DE MULTIPLICAR====\n `.white, ` == del ${base}, hasta el ${limite}== \n`.blue);

    for (let i = 1; i <= limite; i++) {

        let a = base * i;
        console.log(`${base} * ${i} = ${a} \n`.yellow);;


    }

    console.log('==============================================================='.green);

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`El valor introducido ${base} no es un numero`);
            return;

        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            let a = base * i;
            data += `${base} * ${i} = ${a} \n`;


        }

        fs.writeFile(`Tablas/Tabla-del-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`Tabla-del-${base}-al-${limite}.txt`)
            console.log('El archivo a sido creado'.yellow);
        });



    })



}


module.exports = {

    crearArchivo,
    listarTabla

}
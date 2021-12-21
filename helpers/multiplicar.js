//debo de exportar abajo
const fs = require('fs');
const colors = require('colors/safe');
const crearArchivo = async (numTabla = 5, listar = false, limite = 10) => {

    try {
        let salida = '';
        let consola = '';
        
        for (let i = 1; i <= limite; i++) {
            consola+= colors.blue(`${numTabla} x ${i} = ${numTabla * i}\n`);
            salida+= `${numTabla} x ${i} = ${numTabla * i}\n`;
        }

        if (listar) {
            console.log(colors.rainbow('=============='));
            console.log('Tabla del: ', numTabla);
            console.log(colors.rainbow('=============='));

            console.log(consola);
        } 
    
        fs.writeFileSync(`./salida/tabla_${numTabla}.txt`, salida);
        return (`tabla_${numTabla}.txt`);
        
    } catch (error) {
        throw error;        
    }

}

module.exports = {
    crearArchivo
}
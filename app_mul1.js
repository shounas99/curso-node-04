const fs = require('fs');

//imprimir la tabla del 5 en la consola
const numTabla = 3;
let salida = '';
console.clear();
console.log('==============');
console.log( ` Tabla del ${numTabla}` );
console.log('==============');

for (let i = 1; i <= 10; i++) {
    salida+= `${numTabla} x ${i} = ${numTabla * i}\n`; 
}
console.log(salida);

fs.writeFile(`${numTabla}_tabla_.txt`, salida, (e) => {
    if(e) throw e;
    console.log(`Se creo el archivo tabla_${numTabla}.txt uwu`);
})
const fs = require('fs');

// module.exports.imprimirTabla = async( base ) => {
let imprimirTabla = async( base ) => {
	if( !Number( base ) ) throw (`El valor capturado "${ base }" no es un numero`);

	let data = '';

	for (let i = 1; i <= 10; i++) {
		data += `${base} * ${i} = ${base * i};\n`;
	}

	fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
	  if (err) throw err;
	});

	return `tabla-${base}.txt`;
}

module.exports = {
	imprimirTabla: imprimirTabla
};
const fs = require('fs');
const colors = require('colors');


// module.exports.imprimirTabla = async( base ) => {
let imprimirTabla = async( base, limite ) => {
	if( !Number( base ) ) throw (`El valor capturado "${ base }" no es un numero`);
	if( !Number( limite ) ) throw (`El valor capturado del limite "${ limite }" no es un numero`);

	let data = '';

	for (let i = 1; i <= limite; i++) {
		data += `${base} * ${i} = ${base * i};\n`;
	}

	fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
	  if (err) throw err;
	});

	return `tabla-${base}.txt`;
}

let listarTabla = (base, limite) => {
	if( !Number( base ) ) throw (`El valor capturado de la base "${ base }" no es un numero`);
	if( !Number( limite ) ) throw (`El valor capturado del limite "${ limite }" no es un numero`);
	console.log('================================='.green);
	console.log(`======tabla de ${ base }=================`.green);
	console.log('================================='.green);
	for (let i = 1; i <= limite; i++) {
		console.log(`${base} * ${i} = ${base * i};`);
	}
}

module.exports = {
	imprimirTabla: imprimirTabla,
	listarTabla: listarTabla
};
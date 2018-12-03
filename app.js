const { imprimirTabla } = require('./multiplicar/multiplicar')

// console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

console.log(base);
imprimirTabla(base)
	.then(archivo => console.log(`Se he creado el archivo ${ archivo }`))
	.catch(e => console.log(e));
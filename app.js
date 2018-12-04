const colors = require('colors');
const { imprimirTabla, listarTabla } = require('./multiplicar/multiplicar')
const { argv } = require('./config/yargs')

let comando = argv._[0];

switch( comando ){
	case 'listar':
		listarTabla(argv.base, argv.limite);
		break;
	case 'crear':
		imprimirTabla(argv.b, argv.l)
			.then(archivo => console.log(`Se he creado el archivo ${ colors.green(archivo) }`))
			.catch(e => console.log(e));
		break;
	default:
		console.log('Comando no reconocido');
		break;
}


// let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(base);

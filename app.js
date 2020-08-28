// requires
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(`Tarea "${argv.descripcion.green}" guardada!`);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        let titulo = 'TAREAS POR HACER';
        console.log(`\n\n=========${titulo.bgMagenta}===========\n`);
        let i = 1;
        for (let tarea of listado) {

            console.log(`============Tarea N°${i}===============`.green);
            console.log(`Descripcion: ${tarea.descripcion}`);
            console.log(`Completado: ${tarea.completado}`);
            console.log('===================================='.cyan);
            i++;
        }
        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('comando no reconocido!');
        break;
}
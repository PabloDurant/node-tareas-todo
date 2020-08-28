const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca completado/pendiente tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'borra tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
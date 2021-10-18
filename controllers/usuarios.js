const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API - By controller'
    })
}

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - By controller',
        respuesta: `Nombre Solicitante: ${ nombre }, edad: ${ edad }, es mayor de edad? ${ (edad > 17) ? 'SI' : 'NO' }`
    })
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params.id;
    const { nombre, edad } = req.body;
    res.json({
        msg: `${ nombre } put API - By controller`,
        id,
        edad
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - By controller'
    })
}

const usuariosDel = (req, res = response) => {
    res.json({
        msg: 'delete API - By controller'
    })
}

module.exports = { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDel }
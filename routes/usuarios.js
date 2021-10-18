const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosDel, usuariosPatch, usuariosPut } = require('../controllers/usuarios');
const router = Router();

router.get('/', usuariosGet)

router.put('/:id', usuariosPut)

router.post('/', usuariosPost)

router.delete('/', usuariosDel)

router.patch('/', usuariosPatch)

module.exports = router;
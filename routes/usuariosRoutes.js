const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     summary: Crea usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Crea usuarios
 */
router.post('/', usuariosController.CreateUsuarios);
/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get('/', usuariosController.GetUsuarios);
/**
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     summary: Actualizar Usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Actualiza informacion de usuarios
 */
router.put('/:id', usuariosController.UpdateUsuarios);
/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Elimina Usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Elimina informacion de usuarios
 */
router.delete('/:id', usuariosController.DeleteUsuarios);

module.exports = router;
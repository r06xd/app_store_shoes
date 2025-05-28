const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clientesController');

/**
 * @swagger
 * /api/clientes:
 *   post:
 *     summary: Crea clientes
 *     tags: [clientes]
 *     responses:
 *       200:
 *         description: Crea clientes
 */
router.post('/', clienteController.CreateCliente);
/**
 * @swagger
 * /api/clientes:
 *   get:
 *     summary: Obtiene todos los clientes
 *     tags: [clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
router.get('/', clienteController.GetCliente);
/**
 * @swagger
 * /api/clientes/clientesByIdUsuario/{id}:
 *   get:
 *     summary: Obtiene todos los clientes
 *     tags: [clientes]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
router.get('/clientesByIdUsuario/:id', clienteController.GetClienteByIdUsuario);
/**
 * @swagger
 * /api/clientes/{id}:
 *   put:
 *     summary: Actualizar clientes
 *     tags: [clientes]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Actualiza informacion de clientes
 */
router.put('/:id', clienteController.UpdateCliente);
/**
 * @swagger
 * /api/clientes/{id}:
 *   delete:
 *     summary: Elimina clientes
 *     tags: [clientes]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Elimina informacion de clientes
 */
router.delete('/:id', clienteController.DeleteCliente);

module.exports = router;
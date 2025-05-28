const express = require('express');
const router = express.Router();
const catalogoController = require('../controllers/catalogosController');

/**
 * @swagger
 * /api/catalogo:
 *   get:
 *     summary: Obtiene todos los catalogos
 *     tags: [catalogo]
 *     responses:
 *       200:
 *         description: Lista de catalogos
 */
router.get('/', catalogoController.GetCatalogo);

/**
 * @swagger
 * /api/catalogo/catalogoById/{id}:
 *   get:
 *     summary: Obtiene todos los catalogos
 *     tags: [catalogo]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Lista de catalogos
 */
router.get('/catalogoById/:id', catalogoController.GetCatalogoById);

module.exports = router;
const express = require('express');
const router = express.Router();
const detalleCatalogoController = require('../controllers/detalleCatalogoController');

/**
 * @swagger
 * /api/detalleCatalogo:
 *   get:
 *     summary: Obtiene todos los catalogos
 *     tags: [detalleCatalogo]
 *     responses:
 *       200:
 *         description: Lista de detalleCatalogo
 */
router.get('/', detalleCatalogoController.GetDetalleCatalogo);
/**
 * @swagger
 * /api/detalleCatalogo/detalleCatalogoByCatalogo/{id}:
 *   get:
 *     summary: Obtiene todos los detalle catalogos por catalogos
 *     tags: [detalleCatalogo]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Lista de detalleCatalogo
 */
router.get('/detalleCatalogoByCatalogo/:id', detalleCatalogoController.GetDetalleCatalogoByIdCatalogo);

module.exports = router;
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
 * /api/detalleCatalogoByCatalogo/{id}:
 *   get:
 *     summary: Obtiene todos los detalle catalogos por catalogos
 *     tags: [detalleCatalogo]
 *     responses:
 *       200:
 *         description: Lista de detalleCatalogo
 */
router.get('/:id', detalleCatalogoController.GetDetalleCatalogoByIdCatalogo);

module.exports = router;
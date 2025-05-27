const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

/**
 * @swagger
 * /api/encabezadoVentas:
 *   post:
 *     summary: Crea ventas
 *     tags: [ventas]
 *     responses:
 *       200:
 *         description: Crea ventas
 */
router.post('/', ventaController.CreateVenta);
/**
 * @swagger
 * /api/detalleVentas:
 *   post:
 *     summary: Crea ventas
 *     tags: [detalleVentas]
 *     responses:
 *       200:
 *         description: Crea ventas
 */
router.post('/', ventaController.CreateDetalleVenta);
/**
 * @swagger
 * /api/ventas:
 *   get:
 *     summary: Obtiene todos los ventas
 *     tags: [ventas]
 *     responses:
 *       200:
 *         description: Lista de ventas
 */
router.get('/', ventaController.GetVentas);
/**
 * @swagger
 * /api/ventasByCliente/{id}:
 *   get:
 *     summary: Obtiene todos los ventas
 *     tags: [ventas]
 *     responses:
 *       200:
 *         description: Lista de ventas
 */
router.get('/:id', ventaController.GetVentasByCliente);
/**
 * @swagger
 * /api/detallesVentas:
 *   get:
 *     summary: Obtiene todos los ventas
 *     tags: [detalleVentas]
 *     responses:
 *       200:
 *         description: Lista de ventas
 */
router.get('/', ventaController.GetDetalleVenta);
/**
 * @swagger
 * /api/detalleVentasById/{id}:
 *   get:
 *     summary: Obtiene todos los ventas
 *     tags: [detalleVentas]
 *     responses:
 *       200:
 *         description: Lista de ventas
 */
router.get('/:id', ventaController.GetDetalleVentaById);
/**
 * @swagger
 * /api/detalleVentasByIdVentas/{id}:
 *   get:
 *     summary: Obtiene todos los ventas
 *     tags: [detalleVentas]
 *     responses:
 *       200:
 *         description: Lista de ventas
 */
router.get('/:id', ventaController.GetDetalleVentaByVentas);
/**
 * @swagger
 * /api/ventas/{id}:
 *   put:
 *     summary: Actualizar ventas
 *     tags: [ventas]
 *     responses:
 *       200:
 *         description: Actualiza informacion de ventas
 */
router.put('/:id', ventaController.UpdateVenta);
/**
 * @swagger
 * /api/detalleVentas/{id}:
 *   put:
 *     summary: Actualizar ventas
 *     tags: [detalleVentas]
 *     responses:
 *       200:
 *         description: Actualiza informacion de ventas
 */
router.put('/:id', ventaController.UpdateDetalleVenta);
/**
 * @swagger
 * /api/ventas/{id}:
 *   delete:
 *     summary: Elimina ventas
 *     tags: [ventas]
 *     responses:
 *       200:
 *         description: Elimina informacion de ventas
 */
router.delete('/:id', ventaController.DeleteVenta);
/**
 * @swagger
 * /api/detalleVentas/{id}:
 *   delete:
 *     summary: Elimina ventas
 *     tags: [detalleVentas]
 *     responses:
 *       200:
 *         description: Elimina informacion de ventas
 */
router.delete('/:id', ventaController.DeleteDetalleVenta);

module.exports = router;
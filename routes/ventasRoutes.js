const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

/**
 * @swagger
 * /api/ventas/encabezadoVentas:
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
 * /api/ventas/detalleVentas:
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
 * /api/ventas/ventasByCliente/{id}:
 *   get:
 *     summary: Obtiene todos los ventas
 *     tags: [ventas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Lista de ventas
 */
router.get('/ventasByCliente/:id', ventaController.GetVentasByCliente);
/**
 * @swagger
 * /api/ventas/detallesVentas:
 *   get:
 *     summary: Obtiene todos los ventas
 *     tags: [detalleVentas]
 *     responses:
 *       200:
 *         description: Lista de ventas
 */
router.get('/detallesVentas/', ventaController.GetDetalleVenta);
/**
 * @swagger
 * /api/ventas/detalleVentasById/{id}:
 *   get:
 *     summary: Obtiene todos los ventas
 *     tags: [detalleVentas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Lista de ventas
 */
router.get('/detalleVentasById/:id', ventaController.GetDetalleVentaById);
/**
 * @swagger
 * /api/ventas/detalleVentasByIdVentas/{id}:
 *   get:
 *     summary: Obtiene todos los ventas
 *     tags: [detalleVentas]
 *     responses:
 *       200:
 *         description: Lista de ventas
 */
router.get('/detalleVentasByIdVentas/:id', ventaController.GetDetalleVentaByVentas);
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
 * /api/ventas/detalleVentas/{id}:
 *   put:
 *     summary: Actualizar ventas
 *     tags: [detalleVentas]
 *     responses:
 *       200:
 *         description: Actualiza informacion de ventas
 */
router.put('/detalleVentas/:id', ventaController.UpdateDetalleVenta);
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
 * /api/ventas/detalleVentas/{id}:
 *   delete:
 *     summary: Elimina ventas
 *     tags: [detalleVentas]
 *     responses:
 *       200:
 *         description: Elimina informacion de ventas
 */
router.delete('/detalleVentas/:id', ventaController.DeleteDetalleVenta);

module.exports = router;
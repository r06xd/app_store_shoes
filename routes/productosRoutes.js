const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

/**
 * @swagger
 * /api/producto:
 *   post:
 *     summary: Crea productos
 *     tags: [productos]
 *     responses:
 *       200:
 *         description: Crea productos
 */
router.post('/', productoController.CreateProducto);
/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags: [productos]
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get('/', productoController.GetProductos);
/**
 * @swagger
 * /api/productos/productosById/{id}:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags: [productos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get('/productosById/:id', productoController.GetProducto);
/**
 * @swagger
 * /api/productos/{id}:
 *   put:
 *     summary: Actualizar productos
 *     tags: [productos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Actualiza informacion de productos
 */
router.put('/:id', productoController.UpdateProducto);
/**
 * @swagger
 * /api/productos/{id}:
 *   delete:
 *     summary: Elimina productos
 *     tags: [productos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Elimina informacion de productos
 */
router.delete('/:id', productoController.DeleteProducto);
/**
 * @swagger
 * /api/variacionByProducto/{id}:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags: [productos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get('/:id', productoController.GetProductoVariacion);

module.exports = router;
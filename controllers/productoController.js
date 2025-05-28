const pool = require('../models/db');

//Crear producto
exports.CreateProducto = async (req, res) => {
    const { 
        pr_nombre, 
        pr_descripcion, 
        pr_id_catalogo_modelo, 
        pr_color,
        pr_dimensiones,
        pr_codigo_negocio,
        pr_id_catalogo_tipo_producto,
        pr_id_catalogo_tematica
     } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO producto (pr_nombre, pr_descripcion, pr_id_catalogo_modelo, pr_color, pr_dimensiones, pr_codigo_negocio, pr_id_catalogo_tipo_producto, pr_id_catalogo_tematica)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [
        pr_nombre,
        pr_descripcion,
        pr_id_catalogo_modelo,
        pr_color,
        pr_dimensiones,
        pr_codigo_negocio,        
        pr_id_catalogo_tipo_producto,
        pr_id_catalogo_tematica]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al crear producto');
  }
}

//Obtener todos los productos
exports.GetProductos = async (req, res) => {
    try {
    const result = await pool.query('SELECT * FROM producto');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener producto');
  }
}

//Update producto
exports.UpdateProducto = async (req, res) => {
const { id } = req.params;
  const { 
        pr_nombre, 
        pr_descripcion, 
        pr_id_catalogo_modelo, 
        pr_color,
        pr_dimensiones,
        pr_codigo_negocio,
        pr_id_catalogo_tipo_producto,
        pr_id_catalogo_tematica
     } = req.body;

  try {
    const result = await pool.query(
      `UPDATE usuario
       SET pr_nombre = $1, pr_descripcion = $2, pr_id_catalogo_modelo = $3, pr_color = $4, pr_dimensiones = $5, pr_codigo_negocio = $6, pr_id_catalogo_tipo_producto = $7, pr_id_catalogo_tematica = $8
       WHERE us_id = $9
       RETURNING *`,
      [
        pr_nombre,
        pr_descripcion,
        pr_id_catalogo_modelo,
        pr_color,
        pr_dimensiones,
        pr_codigo_negocio,        
        pr_id_catalogo_tipo_producto,
        pr_id_catalogo_tematica,
        id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al actualizar Producto');
  }
};

//delete producto
exports.DeleteProducto = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query(
        'DELETE FROM producto WHERE us_id = $1 RETURNING *',
        [id]
        );

        if (result.rowCount === 0) {
        return res.status(404).json({ error: 'producto no encontrado' });
        }

        res.json({ mensaje: 'producto eliminado correctamente' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al eliminar producto');
    }
};

//GetImagenProducto
exports.GetImagenProducto = async (req, res) => {
    
};

//GetProducto
exports.GetProducto = async (req, res) => {
    const { id } = req.params;
    try {
    const result = await pool.query('SELECT * FROM producto WHERE pr_id = $1', [id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener producto');
  }
};

//GetProducto
exports.GetProductoVariacion = async (req, res) => {
    const { id } = req.params;
    try {
    const result = await pool.query('SELECT * FROM producto_variacion WHERE pv_id_producto = $1', [id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener producto_variacion');
  }
};
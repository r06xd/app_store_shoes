const pool = require('../models/db');

// 👉 Obtener todos los usuarios
exports.GetDetalleCatalogo = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM detalle_catalogo');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener cliente');
  }
};

// 👉 Obtener todos los usuarios
exports.GetDetalleCatalogoByIdCatalogo = async (req, res) => {
    const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM detalle_catalogo WHERE dc_id_catalogo = $1', [id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener cliente');
  }
};
const pool = require('../models/db');

exports.GetCatalogo = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM catalogo');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener catalogo');
    }
};


exports.GetCatalogoById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM catalogo WHERE ca_id = $1', id);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener catalogo');
    }
};
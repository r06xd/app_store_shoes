const pool = require('../models/db');

// 👉 Crear usuario
exports.CreateUsuarios = async (req, res) => {
  const { us_nombre, us_password, us_tipo_usuario, us_id_perfil } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO usuario (us_nombre, us_password, us_tipo_usuario, us_id_perfil)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [us_nombre, us_password, us_tipo_usuario, us_id_perfil]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al crear usuario');
  }
};

// 👉 Obtener todos los usuarios
exports.GetUsuarios = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuario');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener usuarios');
  }
};

// 👉 Actualizar usuario por ID
exports.UpdateUsuarios = async (req, res) => {
  const { id } = req.params;
  const { us_nombre, us_password, us_tipo_usuario, us_id_perfil } = req.body;

  try {
    const result = await pool.query(
      `UPDATE usuario
       SET us_nombre = $1, us_password = $2, us_tipo_usuario = $3, us_id_perfil = $4
       WHERE us_id = $5
       RETURNING *`,
      [us_nombre, us_password, us_tipo_usuario, us_id_perfil, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al actualizar usuario');
  }
};

// 👉 Eliminar usuario por ID
exports.DeleteUsuarios = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM usuario WHERE us_id = $1 RETURNING *',
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al eliminar usuario');
  }
};

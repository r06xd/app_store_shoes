const pool = require('../models/db');

// 👉 Crear usuario
exports.CreateCliente = async (req, res) => {
  const {
    cl_id_usuario,
    cl_nombre,
    cl_apellido,
    cl_direccion,
    cl_telefono,
    cl_email,
    cl_cedula,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO cliente (cl_id_usuario, cl_nombre, cl_apellido, cl_direccion, cl_telefono, cl_email, cl_cedula)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        cl_id_usuario,
        cl_nombre,
        cl_apellido,
        cl_direccion,
        cl_telefono,
        cl_email,
        cl_cedula,]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al crear cliente');
  }
};

// 👉 Obtener todos los usuarios
exports.GetCliente = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cliente');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener cliente');
  }
};

exports.GetClienteByIdUsuario = async (req, res) => {
    const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM cliente WHERE cl_id_usuario = $1', [id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener cliente');
  }
};

// 👉 Actualizar usuario por ID
exports.UpdateCliente = async (req, res) => {
  const { id } = req.params;
  const {
    cl_id_usuario,
    cl_nombre,
    cl_apellido,
    cl_direccion,
    cl_telefono,
    cl_email,
    cl_cedula,
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE cliente
       SET cl_id_usuario = $1, cl_nombre = $2, cl_apellido = $3, cl_direccion = $4, cl_telefono = $5, cl_email = $6, cl_cedula = $7
       WHERE cl_id = $8
       RETURNING *`,
      [
        cl_id_usuario,
        cl_nombre,
        cl_apellido,
        cl_direccion,
        cl_telefono,
        cl_email,
        cl_cedula,
        id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'cliente no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al actualizar cliente');
  }
};

// 👉 Eliminar usuario por ID
exports.DeleteCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM cliente WHERE cl_id = $1 RETURNING *',
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'cliente no encontrado' });
    }

    res.json({ mensaje: 'cliente eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al eliminar cliente');
  }
};

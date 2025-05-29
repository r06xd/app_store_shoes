const pool = require('../models/db');

//Crear venta
exports.CreateVenta = async (req, res) => {
     const {
        ev_id_cliente,
        ev_fecha,
        ev_total_venta,
        ev_factura,
        ev_direccion,
        ev_estado_compra
     } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO encabezado_venta (ev_id_cliente, ev_fecha, ev_total_venta, ev_factura, ev_direccion, ev_estado_compra)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [
        ev_id_cliente,
        ev_fecha,
        ev_total_venta,
        ev_factura,
        ev_direccion,
        ev_estado_compra]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al crear encabezado venta');
  }
};


//Getventa
exports.GetVentas = async (req, res) => {
    try {
    const result = await pool.query('SELECT * FROM encabezado_venta');
    res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener encabezado_venta');
    }
};

//Getventa
exports.GetVentasByCliente = async (req, res) => {
    const { id } = req.params;
    try {
    const result = await pool.query('SELECT * FROM encabezado_venta WHERE ev_id_cliente = $1', [id]);
    res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener encabezado_venta');
    }
};

//Update venta
exports.UpdateVenta = async (req, res) => {
    const { id } = req.params;
  const {
    ev_id_cliente,
    ev_fecha,
    ev_total_venta,
    ev_factura,
    ev_direccion,
    ev_estado_compra
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE encabezado_venta
       SET ev_id_cliente = $1, ev_fecha = $2, ev_total_venta = $3, ev_factura = $4, ev_direccion = $5, ev_estado_compra = $6
       WHERE ev_id = $7
       RETURNING *`,
      [
        ev_id_cliente,
        ev_fecha,
        ev_total_venta,
        ev_factura,
        ev_direccion,
        ev_estado_compra,
        id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Usuario no encabezado_venta' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al actualizar encabezado_venta');
  }
};

//Delete venta
exports.DeleteVenta = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query(
        'DELETE FROM encabezado_venta WHERE ev_id = $1 RETURNING *',
        [id]
        );

        if (result.rowCount === 0) {
        return res.status(404).json({ error: 'encabezado_venta no encontrado' });
        }

        res.json({ mensaje: 'encabezado_venta eliminado correctamente' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al eliminar encabezado_venta');
    }
};

//Crear detalle venta
exports.CreateDetalleVenta = async (req, res) => {
    const {
        dvp_id_producto,
        dvp_id_encabezado_venta
     } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO detalle_venta_producto (dvp_id_producto, dvp_id_encabezado_venta)
       VALUES ($1, $2) RETURNING *`,
      [
        dvp_id_producto,
        dvp_id_encabezado_venta]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al crear detalle venta');
  }
};

//Get detalle venta
exports.GetDetalleVenta = async (req, res) => {
    try {
    const result = await pool.query('SELECT * FROM detalle_venta_producto');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener usuarios');
  }
};

//Get detalle venta
exports.GetDetalleVentaByVentas = async (req, res) => {
    const { id } = req.params;
    try {
    const result = await pool.query('SELECT * FROM detalle_venta_producto WHERE dvp_id_encabezado_venta = $1', [id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener detalle_venta_producto');
  }
};

//Get detalle venta
exports.GetDetalleVentaById = async (req, res) => {
    const { id } = req.params;
    try {
    const result = await pool.query('SELECT * FROM detalle_venta_producto WHERE dvp_id = $1', [id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener detalle_venta_producto');
  }
};

//delete detalle venta
exports.DeleteDetalleVenta = async (req, res) => {
    const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM detalle_venta_producto WHERE dvp_id = $1 RETURNING *',
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'detalle_venta_producto no encontrado' });
    }

    res.json({ mensaje: 'detalle_venta_producto eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al eliminar detalle_venta_producto');
  }
};

//update detalle venta
exports.UpdateDetalleVenta = async (req, res) => {
    const { id } = req.params;
    const {
        dvp_id_producto,
        dvp_id_encabezado_venta
    } = req.body;

    try {
        const result = await pool.query(
        `UPDATE detalle_venta_producto
        SET dvp_id_producto = $1, dvp_id_encabezado_venta = $2
        WHERE dvp_id = $3
        RETURNING *`,
        [dvp_id_producto,
        dvp_id_encabezado_venta,
        id]
        );

        if (result.rowCount === 0) {
        return res.status(404).json({ error: 'detalle_venta_producto no encontrado' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar detalle_venta_producto');
    }
};


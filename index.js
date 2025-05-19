const express = require('express');
const pool = require('./models/db');
require('dotenv').config();

const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

// 👉 Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const usuariosRoutes = require('./routes/usuariosRoutes');

app.use(express.json());
app.use('/api/usuarios', usuariosRoutes);

app.listen(PORT,'0.0.0.0', ()=>{
    console.log('Servidor corriendo en http://0.0.0.0:',PORT);
});
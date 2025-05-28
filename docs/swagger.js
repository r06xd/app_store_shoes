const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Api para gestionar una tienda en linea',
      version: '1.0.0',
      description: 'Documentación de la API REST de usuarios, perfiles, ventas, etc.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./routes/*.js'], // Ruta donde Swagger buscará anotaciones JSDoc
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;

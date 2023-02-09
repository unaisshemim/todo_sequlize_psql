const swaggerJsdoc = require('swagger-jsdoc');

exports.swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo API',
      version: '1.0.0',
      description: 'A simple todo API',
    },
  },
  apis: ['./routes /*.js'],
};


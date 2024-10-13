import swaggerJsdoc, {Options} from 'swagger-jsdoc'

const options: Options = {
    definition: {
      openapi: '3.0.0',
        info: {
            title: 'Swagger Express API',
            version: '1.0.0',
            description: 'A simple Express API with Swagger documentation'
        }  
    },
    apis: ['dist/routes/*.js']
}

export const specs = swaggerJsdoc(options)
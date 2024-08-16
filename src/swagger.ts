import swaggerjsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import dotenv from "dotenv";

dotenv.config();


// Swagger Definition
const swaggerDefinition = {

    openapi: "3.0.0",
    info: {
        title: "Division Administrative du Cameroun",
        version:"1.0.0",
        description: "Cet API fournit les requêtes sur la division administrative du Cameroun et les informations y afférentes.."
    },

    servers: [
        {
            url: process.env.URL,
            description: "Developement Server"
        },
        {
            url:"Live Server",
            description:"Live Server"
        }
    ]
}

// option for swagger-jsdoc
const options = {
    swaggerDefinition,
    apis: [
        'routes/*.ts'
    ]
}

// initialize swagger

const swaggerSpec = swaggerjsDoc(options);

//setup swagger
const setupSwagger = (app:Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default setupSwagger; 
const express = require("express");
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser');
require("dotenv").config();

// Routes imoprts
const player_api = require('./routes/player')
const med_api = require('./routes/medicamento')
const active_api = require('./routes/activos')

const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")

const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Neo4J API",
            version: "1.0.0",
        },
        servers: [
            {
                url: "http://localhost:9000",
            },
        ],
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`],
}

const app = express();
const port = process.env.PORT || 9000;

// app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

// Routes
app.use('/player', player_api)
app.use('/med', med_api)
app.use('/activo', active_api)

app.listen(port, () => console.log(
    "Server listenign to: ", port    
));

module.exports = app;
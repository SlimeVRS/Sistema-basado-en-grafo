const express = require('express');
const router = express.Router()
const med_calls = require('./../neo4j_calls/medicamento');

/**
 * @swagger
 * components:
 *  schemas:
 *      Generic_Med:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: Nombre del medicamento
 *              tipo:
 *                  type: string
 *                  description: Tipo de farmaco (generico o etica)
 *              lab_nombre:
 *                  type: string
 *                  description: Laboratorio ofertante del farmaco
 *              estado:
 *                  type: string
 *                  description: Estado del farmaco
 *              activo:
 *                  type: string
 *                  description: Compuesto o grupos activos del farmaco
 *              precio:
 *                  type: number
 *                  description: Precio del farmaco con IVA de la Union Europea
 *              tratamiento:
 *                  type: string
 *                  description: Indica si es tratamiento de larga duracion
 *          required:
 *              - nombre
 *              - tipo
 *              - lab_nombre
 *              - estado
 *              - activo
 *              - precio
 *              - tratamiento        
 */

/**
 * @swagger
 * /med:
 *  get:
 *      summary: Obtener todos los medicamentos genericos
 *      tags: [Medicamento generico]
 *      responses:
 *          200:
 *              description: Todos los medicamentos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Generic_Med'
 */
router.get('/', async function (req, res) {
    const result = await med_calls.get_all_generic_medicines();
    res.status(200).send({ result });
    return { result };
})

/**
 * @swagger
 * /med/{id}:
 *  get:
 *      summary: Obtiene un medicamento generico
 *      tags: [Medicamento generico]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: number
 *            required: true
 *            description: ID del medicamento generico
 *      responses:
 *          200:
 *              description: Un unico medicamento
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Generic_Med'
 *          404:
 *              description: El medicamento no fue encontrado
 *              
 */
router.get('/:id', async function (req, res) {
    const result = await med_calls.get_generic_med_by_id(req.params.id)
    if (result == null) {
        res.status(404).send({ Message: "No se encontro el medicamento generico con el id: " + req.params.id }) // "No se encontro el medicamento generico con el id: " + req.params.id
    } else {
        res.status(200).send({ result })
        return { result }
    }
})


/**
 * @swagger
 * /med:
 *  post:
 *      summary: Crea un muevo medicamento generico
 *      tags: [Medicamento generico]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Generic_Med'
 *          responses:
 *              200:
 *                  description: Nuevo medicamento generico creado
 *              500:
 *                  description: Error al crear el medicamento generico
 */
router.post('/', async function (req, res) {
    const result = await med_calls.create_generic_med(req.body)
    if (result == null) {
        res.status(500).send({ Message: "No se pudo crear el medicamento generico" })
    } else {
        res.status(200).send({ result })
        return { result }
    }
})


/**
 * @swagger
 * /med/{id}:
 *  put:
 *      summary: Actualiza un medicamento generico
 *      tags: [Medicamento generico]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: number
 *            required: true
 *            description: ID del medicamento generico
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Generic_Med'
 *      responses:
 *          200:
 *              description: Un unico medicamento actualizado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Generic_Med'
 *          404:
 *              description: El medicamento no fue encontrado
 *              
 */
router.put('/:id', async function (req, res) {
    const result = await med_calls.update_generic_med(req.params.id, req.body)
    if (result == null) {
        res.status(404).send({ Message: "No se encontro el medicamento generico con el id: " + req.params.id })
    } else {
        res.status(200).send({ result })
        return { result }
    }
})

/**
 * @swagger
 * /med/{id}:
 *  delete:
 *      summary: Eliminar un medicamento generico
 *      tags: [Medicamento generico]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: number
 *            required: true
 *            description: ID del medicamento generico
 *      responses:
 *          200:
 *              description: El medicamento fue eliminado
 *          404:
 *              description: El medicamento no fue encontrado
 *              
 */
router.delete('/:id', async function (req, res) {
    const result = await med_calls.delete_generic_med(req.params.id);
    if (result == true) {
        res.status(200).send({ Message: "Se ha borrado el medicamento con el id: " + req.params.id })
    } else if (result == false) {
        res.status(404).send({ Message: "No se encontro el medicamento generico con el id: " + req.params.id })
    } else {
        res.status(500).send({ Message: "No se pudo eliminar el medicamento generico" })
    }
})

/**
 * @swagger
 * /med/relacion_entre_medicamentos_y_activos:
 *  post:
 *      summary: Crea todas las relaciones entre los medicamentos y sus activos
 *      tags: [Medicamento generico]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          activo_medicamento:
 *                              type: string
 *                              description: Activo del medicamento
 *                          nombre_activo:
 *                              type: string
 *                              description: Nombre del activo
 *          responses:
 *              200:
 *                  description: Relaciones creadas
 *              500:
 *                  description: Error al crear las relaciones
 */
router.post('/relacion_entre_medicamentos_y_activos', async function(req, res) {
    const result = await med_calls.create_principle_active_relation(req.body)
    if (result == true) {
        res.status(200).send({ 
            Message: "Se han creado todas las relaciones para " +  req.body.activo_medicamento + " y " + req.body.nombre_activo
        })
        return true
    } else {
        res.status(500).send({ 
            Message: "Hubo un error al crear las relaciones: " +  req.body.activo_medicamento + " y " + req.body.nombre_activo
         })
    }
})

module.exports = router;
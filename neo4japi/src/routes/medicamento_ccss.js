const express = require('express');
const router = express.Router()
const med_ccss_calls = require('./../neo4j_calls/medicamento_ccss');

/**
 * @swagger
 * components:
 *  schemas:
 *      Medicamento_CCSS:
 *          type: object
 *          properties:
 *              servicio:
 *                  type: string
 *                  description: Departamento que solicita el medicamento
 *              piezas:
 *                  type: number
 *                  description: Cantidad de medicamento solicitado
 *              precio:
 *                  type: number
 *                  description: Precio unitario del medicamento
 *              marca:
 *                  type: string
 *                  description: Marca del producto
 *          required:
 *              - servicio
 *              - piezas
 *              - precio
 *              - marca       
 */

/**
 * @swagger
 * /medicamento_ccss:
 *  get:
 *      summary: Obtener todos los medicamentos solicitados por la caja
 *      tags: [Medicamento de CCSS]
 *      responses:
 *          200:
 *              description: Todos los medicamentos de la caja
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Medicamento_CCSS'
 */
router.get('/', async function (req, res) {
    const result = await med_ccss_calls.get_all_ccss_meds();
    res.status(200).send({ result });
    return { result }
})

/**
 * @swagger
 * /medicamento_ccss/{id}:
 *  get:
 *      summary: Obtiene un medicamento de la caja
 *      tags: [Medicamento de CCSS]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: number
 *            required: true
 *            description: ID del medicamento de la caja
 *      responses:
 *          200:
 *              description: Un unico medicamento de la caja
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Medicamento_CCSS'
 *          404:
 *              description: El medicamento de la caja no fue encontrado
 *              
 */
router.get('/:id', async function (req, res) {
    const result = await med_ccss_calls.get_ccss_med_by_id(req.params.id)
    if(result == null) {
        res.status(404).send({ Message: "No se encontro el medicamento de la caja con el id: " + req.params.id })
    } else {
        res.status(200).send({ result })
        return { result }
    }
})

/**
 * @swagger
 * /medicamento_ccss:
 *  post:
 *      summary: Crea un muevo medicamento de la caja
 *      tags: [Medicamento de CCSS]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Medicamento_CCSS'
 *          responses:
 *              200:
 *                  description: Nuevo medicamento de la caja creado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              $ref: '#/components/schemas/Medicamento_CCSS'
 *              500:
 *                  description: Error al crear el medicamento de la caja generico
 */
router.post('/', async function (req, res) {
    const result = await med_ccss_calls.create_med_ccss(req.body)
    if(result == null) {
        res.status(500).send({ Message: "No se pudo crear el medicamento de la ccss" })
    } else {
        res.status(200).send({ result })
        return { result }
    }
})

/**
 * @swagger
 * /medicamento_ccss/{id}:
 *  put:
 *      summary: Actualiza un medicamento generico
 *      tags: [Medicamento de CCSS]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: number
 *            required: true
 *            description: ID del medicamento de la caja
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Medicamento_CCSS'
 *      responses:
 *          200:
 *              description: Un unico medicamento de la caja actualizado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Medicamento_CCSS'
 *          404:
 *              description: El medicamento de la caja no fue encontrado
 *              
 */
router.put('/:id', async function (req, res) {
    const result = await med_ccss_calls.update_med_ccss(req.params.id, req.body)
    if(result == null ) {
        res.status(404).send({ Message: "No se encontro el medicamento de la caja con el id: " + req.params.id })
    } else {
        res.status(200).send({ result })
        return { result }
    }
})

/**
 * @swagger
 * /medicamento_ccss/{id}:
 *  delete:
 *      summary: Eliminar un medicamento generico
 *      tags: [Medicamento de CCSS]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: number
 *            required: true
 *            description: ID del medicamento de la caja
 *      responses:
 *          200:
 *              description: El medicamento de la caja fue eliminado
 *          404:
 *              description: El medicamento de la caja no fue encontrado
 *              
 */
router.delete('/:id', async function (req, res) {
    const result = await med_ccss_calls.delete_med_ccss(req.params.id)
    if(result == true) {
        res.status(200).send({ Message: "Se ha eliminado el medicamento de la caja con el id: " + req.params.id })
    } if (result == false) {
        res.status(404).send({ Message: "No se ha encontrado el medicamento de la caja con el id: " + req.params.id })
    } else {
        res.status(500).send({
            Message: "No se pudo eliminar el medicamento de la caja con el id: " + req.params.id
        })   
    }
})

/**
 * @swagger
 * /medicamento_ccss/relacion_entre_solicitado_y_medicamento:
 *  post:
 *      summary: Crea todas las relaciones entre un medicamento solicitado y el servicio
 *      tags: [Medicamento de CCSS]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          medicamento_solicitado:
 *                              type: string
 *                              description: medicamento de la caja 
 *                          medicamento_pedido:
 *                              type: string
 *                              description: medicamento del catalogo general
 *          responses:
 *              200:
 *                  description: Relaciones creadas
 *              500:
 *                  description: Error al crear las relaciones
 */
router.post('/relacion_entre_solicitado_y_medicamento', async function (req, res) {
    const result = await med_ccss_calls.create_service_med_relations(req.body)
    if(result == true) {
        res.status(200).send({ 
            Message: "Se han creado todas las relaciones para " +  req.body.medicamento_solicitado + " y " + req.body.medicamento_pedido
         })
    } else {
        res.status(500).send({ 
            Message: "Hubo un error al crear las relaciones: " +  req.body.medicamento_solicitado + " y " + req.body.medicamento_pedido
         })
    }
})

module.exports = router;
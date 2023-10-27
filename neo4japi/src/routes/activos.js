const express = require('express')
const router = express.Router()
const active_calls = require('./../neo4j_calls/activos');

/**
 * @swagger
 * components:
 *  schemas:
 *      Activo:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: Nombre del activo
 *              presentacion:
 *                  type: string
 *                  description: Presentacion si es liquido, solido o ambos
 *              fabricante:
 *                  type: string
 *                  description: Quien fabrica el activo
 *              regulacion:
 *                  type: string
 *                  description: Indica si el producto es regulado o no
 *          required:
 *              - nombre
 *              - presentacion
 *              - fabricante
 *              - regulacion       
 */

/**
 * @swagger
 * /activo:
 *  get:
 *      summary: Obtener todos los activos
 *      tags: [Activo]
 *      responses:
 *          200:
 *              description: Todos los activos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Activo'
 */
router.get('/', async function(req, res) {
    const result = await active_calls.get_all_actives();
    res.status(200).send({ result });
    return {result};
})

/**
 * @swagger
 * /activo/{id}:
 *  get:
 *      summary: Obtiene un activo
 *      tags: [Activo]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: number
 *            required: true
 *            description: ID del activo
 *      responses:
 *          200:
 *              description: Un unico activo
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Activo'
 *          404:
 *              description: El activo no fue encontrado
 *              
 */
router.get('/:id', async function(req, res) {
    const result = await active_calls.get_active_by_id(req.params.id)
    if(result == null) {
        res.status(404).send({ Message: "No se encontro el medicamento generico con el id: " + req.params.id })
    } else {
        res.status(200).send({ result })
        return { result }
    }
})

/**
 * @swagger
 * /activo:
 *  post:
 *      summary: Crea un muevo activo
 *      tags: [Activo]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Activo'
 *          responses:
 *              200:
 *                  description: Nuevo activo creado
 *                  content:
    *                  application/json:
    *                      schema:
    *                          type: object
    *                          $ref: '#/components/schemas/Activo'
 *              500:
 *                  description: Error al crear el activo
 */
router.post('/', async function (req, res) {
    const result = await active_calls.create_active(req.body)
    if(result == null) {
        res.status(500).send({ Message: "No se pudo crear el activo"})
    } else {
        res.status(200).send({ result })
        return { result }
    }
})

/**
 * @swagger
 * /activo/{id}:
 *  put:
 *      summary: Actualiza un activo
 *      tags: [Activo]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: number
 *            required: true
 *            description: ID del activo
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Activo'
 *      responses:
 *          200:
 *              description: Un unico activo actualizado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Activo'
 *          404:
 *              description: El activo no fue encontrado
 *              
 */
router.put('/:id', async function (req, res) {
    const result = await active_calls.update_active(req.params.id, req.body)
    if(result == null) {
        res.status(404).send({ Message: "No se encontro el activo con el id: " + req.params.id })
    } else {
        res.status(200).send({ result })
        return { result }
    }
})

/**
 * @swagger
 * /activo/{id}:
 *  delete:
 *      summary: Eliminar un activo
 *      tags: [Activo]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: number
 *            required: true
 *            description: ID del activo
 *      responses:
 *          200:
 *              description: El activo fue eliminado
 *          404:
 *              description: El activo no fue encontrado
 *              
 */
router.delete('/:id', async function (req, res) {
    const result = await active_calls.delete_active(req.params.id)
    if(result == true) {
        res.status(200).send({ Message: "Se ha eliminado el activo con el id: " + req.params.id })
    } else if (result == false) {
        res.status(404).send({ Message: "No se ha encontrado el activo con el id: " + req.params.id })
    } else {
        res.status(500).send({ Message: "No se pudo eliminar el activo con el id: " + req.params.id })
    }
})

module.exports = router
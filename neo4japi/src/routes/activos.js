const express = require('express')
const router = express.Router()
const active_calls = require('./../neo4j_calls/activos');

router.get('/', async function(req, res) {
    const result = await active_calls.get_all_actives();
    res.status(200).send({ result });
    return {result};
})

router.get('/:id', async function(req, res) {
    const result = await active_calls.get_active_by_id(req.params.id)
    if(result == null) {
        res.status(404).send({ Message: "No se encontro el medicamento generico con el id: " + req.params.id })
    } else {
        res.status(200).send({ result })
        return { result }
    }
})

router.post('/', async function (req, res) {
    const result = await active_calls.create_active(req.body)
    if(result == null) {
        res.status(500).send({ Message: "No se pudo crear el activo"})
    } else {
        res.status(200).send({ result })
        return { result }
    }
})

router.put('/:id', async function (req, res) {
    const result = await active_calls.update_active(req.params.id, req.body)
    if(result == null) {
        res.status(404).send({ Message: "No se encontro el medicamento generico con el id: " + req.params.id })
    } else {
        res.status(200).send({ result })
        return { result }
    }
})

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
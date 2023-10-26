const express = require('express');
const router = express.Router()
const med_calls = require('./../neo4j_calls/medicamento');

router.get('/', async function(req, res) {
    const result = await med_calls.get_all_generic_medicines();
    res.status(200).send({ result });
    return {result};
})

router.get('/:id', async function(req, res) {
    const result = await med_calls.get_all_generic_medicines(req.params.id)
    if(result == null) {
        res.status(404).send({ Message: "No se encontro el medicamento generico con el id: " + req.params.id}) // "No se encontro el medicamento generico con el id: " + req.params.id
    } else {
        res.status(200).send({ result })
        return { result }
    }
})

router.post('/', async function (req, res) {
    const result = await med_calls.create_generic_med(req.body)
    if(result == null) {
        res.status(500).send({ Message: "No se pudo crear el medicamento generico" })
    } else {
        res.status(200).send({ result })
        return { result }
    }
})

router.put('/:id', async function (req, res) {
    const result = await med_calls.update_generic_med(req.params.id, req.body)
    if (result == null) {
        res.status(404).send({ Message: "No se encontro el medicamento generico con el id: " + req.params.id})
    } else {
        res.status(200).send({ result })
        return { result }
    }
})

router.delete('/:id', async function (req, res) {
    const result = await med_calls.delete_generic_med(req.params.id);
    if (result == true) {
        res.status(200).send({ Message: "Se ha borrado el medicamento con el id: " + req.params.id})
    } else if (result == false) {
        res.status(404).send({ Message: "No se encontro el medicamento generico con el id: " + req.params.id})
    } else {
        res.status(500).send({ Message: "No se pudo eliminar el medicamento generico" })
    }
})

module.exports = router;
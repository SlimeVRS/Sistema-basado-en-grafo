const express = require('express');
const router = express.Router();
const neo4j_calls = require('./../neo4j_calls/player');

router.get('/', async function (req, res) {
    const result = await neo4j_calls.get_players();
    console.log("Cantidad de jugadores: ", result)
    res.status(200).send({ result })
    return { result };
})

module.exports = router
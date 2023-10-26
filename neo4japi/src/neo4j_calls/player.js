const neo4j = require('neo4j-driver');
const { creds } = require("./../config/credentials")
const driver = neo4j.driver("bolt://0.0.0.0:7687", neo4j.auth.basic(creds.neo4jusername, creds.neo4jpw));

exports.get_players = async function() {
    let session = driver.session();
    const player_nodes = await session.run('MATCH (player:PLAYER) RETURN player');
    session.close()
    return (!player_nodes ? 0 : player_nodes.records.length);
}
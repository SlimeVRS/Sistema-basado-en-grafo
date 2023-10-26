const neo4j = require('neo4j-driver');
const { creds } = require("./../config/credentials");
const driver = neo4j.driver("bolt://0.0.0.0:7687", neo4j.auth.basic(creds.neo4jusername, creds.neo4jpw));

exports.get_all_actives = async function() {
    let session = driver.session();
    const active_nodes = await session.run('MATCH (activos:ACTIVO) RETURN activos')
    session.close();
    return (!active_nodes ? 0 : active_nodes.records.map(i=>i.get('activos').properties));
}

exports.get_active_by_id = async function (id) {
    let session = driver.session();
    const active_node = await session.run(`MATCH (activo:ACTIVO) WHERE id(activo) = ${id} RETURN activo`)
    session.close();
    if(active_node.records[0] == null) {
        return null
    } else {
        return (!active_node ? 0 : active_node.records[0].get('activo').properties)
    }
}

exports.create_active = async function(active) {
    let session = driver.session();
    const active_node = await session.run(`
        CREATE (activo:ACTIVO {
            nombre: '${active.nombre}',
            presentacion: '${active.presentacion}',
            fabricante: '${active.fabricante}',
            regulacion: '${active.regulacion}'
        })
        RETURN activo
    `)
    session.close()
    if (active_node.records[0] == null) {
        return null
    } else {
        return (!active_node ? 0 : active_node.records[0].get('activo').properties)
    }
}

exports.update_active = async function(id, activo) {
    let session = driver.session();
    const active_node = await session.run(`
        MATCH (activo:ACTIVO)
        WHERE ID(activo) = ${id} 
        SET activo.nombre = '${activo.nombre}',
            activo.presentacion = '${activo.presentacion}',
            activo.fabricante = '${activo.fabricante}',
            activo.regulacion = '${activo.regulacion}'
        RETURN activo
    `)
    session.close();
    if(active_node.records[0] == null) {
        return null
    } else {
        return (!active_node ? 0 : active_node.records[0].get('activo').properties);
    }
}

exports.delete_active = async function (id) {
    let session = driver.session();
    try {
        const active_node = await session.run(`
            MATCH (active:ACTIVO)
            WHERE ID(active) = ${id}
            DETACH DELETE active
        `)
        return true
    } catch (error) {
        console.log(error)
        return null
    } finally {
        session.close()
    }
}
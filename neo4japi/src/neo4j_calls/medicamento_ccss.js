const neo4j = require('neo4j-driver');
const { creds } = require('./../config/credentials')
const driver = neo4j.driver("bolt://0.0.0.0:7687", neo4j.auth.basic(creds.neo4jusername, creds.neo4jpw), {disableLosslessIntegers: true});

exports.get_all_ccss_meds = async function () {
    let session = driver.session();
    const med_ccss_nodes = await session.run('MATCH (med_ccss:MEDICAMENTO_CCSS) RETURN med_ccss')
    session.close();
    return (!med_ccss_nodes ? 0 : med_ccss_nodes.records.map(i=>i.get('med_ccss').properties))
}

exports.get_ccss_med_by_id = async function (id) {
    let session = driver.session();
    const med_ccss_node = await session.run(`MATCH (med_ccss:MEDICAMENTO_CCSS) WHERE ID(med_ccss) = ${id} RETURN med_ccss`)
    session.close();
    if(med_ccss_node.records[0] == null) {
        return null
    } else {
        return (!med_ccss_node ? 0 : med_ccss_node.records[0].get('med_ccss').properties)
    }
}

exports.create_med_ccss = async function(med_ccss) {
    let session = driver.session();
    const med_ccss_node = await session.run(`
        CREATE (med_ccss:MEDICAMENTO_CCSS {
            servicio: '${med_ccss.servicio}',
            piezas: ${med_ccss.piezas},
            precio: ${med_ccss.precio},
            marca: '${med_ccss.marca}'
        })
        RETURN med_ccss
    `)
    session.close()
    if(med_ccss_node.records[0] == null) {
        return null
    } else {
        return (!med_ccss_node ? 0 : med_ccss_node.records[0].get('med_ccss').properties)
    }
}

exports.update_med_ccss = async function(id, med_ccss) {
    let session = driver.session();
    const med_ccss_node = await session.run(`
        MATCH (med_ccss:MEDICAMENTO_CCSS)
        WHERE ID(med_ccss) = ${id} 
        SET med_ccss.servicio = '${med_ccss.servicio}',
            med_ccss.piezas = '${med_ccss.piezas}',
            med_ccss.precio = '${med_ccss.precio}',
            med_ccss.marca = '${med_ccss.marca}'
        RETURN med_ccss
    `)
    session.close();
    if(med_ccss_node.records[0] == null) {
        return null
    } else {
        return (!med_ccss_node ? 0 : med_ccss_node.records[0].get('med_ccss').properties);
    }
}

exports.delete_med_ccss = async function(id) {
    let session = driver.session()
    try {
        const med_ccss_node = await session.run(`
            MATCH (med_ccss:MEDICAMENTO_CCSS)
            WHERE ID(med_ccss) = ${id}
            DETACH DELETE med_ccss
        `)
        return true
    } catch (error) {
        console.log(error)
        return null
    } finally {
        session.close()
    }
}

exports.create_service_med_relations = async function(relacion) {
    let session = driver.session();
    try {
        await session.run(`
            MATCH (med_ccss:MEDICAMENTO_CCSS {marca:'${relacion.medicamento_solicitado}'}), (med:MEDICAMENTO {nombre:'${relacion.medicamento_pedido}'})
            CREATE (med_ccss)-[
                :PIDE
            ]->(med)
        `)
        return true
    } catch (error) {
        console.log(error)
        return null
    } finally {
        session.close()
    }
}
const neo4j = require('neo4j-driver');
const { creds } = require("./../config/credentials")
const driver = neo4j.driver("bolt://0.0.0.0:7687", neo4j.auth.basic(creds.neo4jusername, creds.neo4jpw), {disableLosslessIntegers: true});

exports.get_all_generic_medicines = async function () {
    let session = driver.session();
    const generic_medicines_nodes = await session.run('MATCH (med:MEDICAMENTO) RETURN med')
    session.close();
    return (!generic_medicines_nodes ? 0 : generic_medicines_nodes.records.map(i=>i.get('med').properties));
}

exports.get_generic_med_by_id = async function (id) {
    let session = driver.session();
    const med_node = await session.run('MATCH (med:MEDICAMENTO) WHERE id(med) = ' + id + ' RETURN med');
    session.close();
    if (med_node.records[0] == null) {
        return null
    } else {
        return (!med_node ? 0 : med_node.records[0].get('med').properties);
    }
}

exports.create_generic_med = async function (med) {
    let session = driver.session();
    const med_node = await session.run(`CREATE (med:MEDICAMENTO {nombre: '${med.nombre}', tipo: '${med.tipo}', lab_nombre: '${med.lab_nombre}', estado: '${med.estado}', activo: '${med.activo}', precio: ${med.precio}, tratamiento: '${med.tratamiento}'}) RETURN med`)
    session.close()
    if (med_node.records[0] == null) {
        return null
    } else {
        return (!med_node ? 0 : med_node.records[0].get('med').properties);
    }
}

exports.update_generic_med = async function (id, med) {
    let session = driver.session();
    const med_node = await session.run(`MATCH (med:MEDICAMENTO) WHERE ID(med) = ${id} SET med.nombre = '${med.nombre}', med.tipo = '${med.tipo}', med.lab_nombre = '${med.lab_nombre}', med.estado = '${med.estado}', med.activo = '${med.activo}', med.precio = ${med.precio}, med.tratamiento = '${med.tratamiento}' RETURN med`)
    session.close();
    if (med_node.records[0] == null) {
        return null
    } else {
        return (!med_node ? 0 : med_node.records[0].get('med').properties);
    }
}

exports.delete_generic_med = async function (id) {
    let session = driver.session();
    try {
        const med_node = await session.run(`MATCH (med:MEDICAMENTO) WHERE ID(med) = ${id} DETACH DELETE med`)
        return true
    } catch (error) {
        console.log(error)
        return null
    } finally {
        session.close()
    }
}
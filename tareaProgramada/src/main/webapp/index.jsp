<%-- 
    Document   : menu
    Created on : 1 sept 2023, 21:37:59
    Author     : HP
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Menu Principal</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #ADD8E6; /* Color de fondo */
            margin: 0;
            padding: 0;
        }

        .container {
            background-image: url('pills2.avif'); /* Ruta de la imagen de fondo */
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
        }

        .button {
            background-color: #6565FF; /* Color del botón */
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            font-size: 20px;
            cursor: pointer;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Menú principal</h1>
        <form action="/tareaProgramada/Top10Suspendidos.jsp" method="post">
            <button class="button" type="submit" name="consulta1">Top 10 Principios Activos Suspendidos</button>
        </form>
        <form action="/tareaProgramada/EncontrarFabricante.jsp" method="post">
            <button class="button" type="submit" name="salir">Encontrar Fabricante</button>
        </form>
        <form action="/tareaProgramada/BuscarProducto.jsp" method="post">
            <button class="button" type="submit" name="salir">Buscar Producto</button>
        </form>
        <form action="/tareaProgramada/Top5Medicamentos.jsp" method="post">
            <button class="button" type="submit" name="salir">Top 5 Medicamentos</button>
        </form>
        <form action="/tareaProgramada/Top10MasFabricantes.jsp" method="post">
            <button class="button" type="submit" name="salir">Top 10 Principios Activos con Más Fabricantes</button>
        </form>
        
        <form action="/tareaProgramada/Top10Suspendidos.jsp" method="post">
            <button class="button" type="submit" name="salir">Top 10 Principios Activos Suspendidos</button>
        </form>
        <form action="/tareaProgramada/medicamentosLargaDuracion.jsp" method="post">
            <button class="button" type="submit" name="salir">Medicamentos de Larga Duracion</button>
        </form>
        <form action="/tareaProgramada/reporteDeMedicamentos.jsp" method="post">
            <button class="button" type="submit" name="salir">Reporte Medicamentos</button>
        </form>
        <form action="/tareaProgramada/productosFabricante.jsp" method="post">
            <button class="button" type="submit" name="salir">Productos de Fabricante que no esta en la CCSS</button>
        </form>
        <form action="/tareaProgramada/proveedoresDeMedicamentos.jsp" method="post">
            <button class="button" type="submit" name="salir">Poveedores de medicamentos</button>
        </form>
       
        <form action="SvSubirArchivo" method="post" enctype="multipart/form-data">
        <input type="file" name="file" id="file" class="button">
        <input type="submit" value="Subir Archivo" class="button">
    </form>

    
<form action="pokemon.jsp" method="post">
        <input type="submit" value="Consultar Pokémon">
    </form>

        
    </div>
    <h1>Archivo Subido con Éxito</h1>
    <p>El archivo que has subido se llama: <%= request.getAttribute("filename") %></p>
</body>
</html>

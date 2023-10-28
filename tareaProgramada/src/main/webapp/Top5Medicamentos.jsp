
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            margin: 0;
            background-image: url('pills2.avif');
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-color: #87CEEB;
            font-family: Arial, sans-serif;
            text-align: left;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        label {
            font-weight: bold;
            color: #333;
            display: block;
            margin-bottom: 5px;
        }
        select {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
        }
        button {
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            font-size: 18px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        #result {
            margin-top: 20px;
            padding: 20px;
            background-color: rgba(135, 206, 235, 0.8);
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            text-align: left;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #333;
            padding: 8px;
            text-align: left;
        }
    </style>
</head>
<body>
    <h1>Top 5 Medicamentos y Suministros por Departamento</h1>

    <form action="SvTop5Medicamentos" method="post">
        <label for="departamento">Seleccione el departamento:</label>
        <select name="departamento" required>
            <option value="departamento1">Departamento 1</option>
            <option value="departamento2">Departamento 2</option>
            <!-- Agrega más opciones según tus departamentos -->
        </select>
        <br>
        <br>
        <button type="submit">Buscar</button>
    </form>
    <form action="/tareaProgramada" method="post">
        <button class="button" type="submit" name="salir">Volver</button>
    </form>
    <div id="result">
        <h2>Resultados:</h2>
        <!-- DATOS DE EJEMPLO -->
        <table>
            <tr>
                <th>Nombre del Medicamento o Suministro</th>
                <th>Proveedor</th>
                <th>Valor en el Mercado Europeo</th>
                <th>Precio Regulado</th>
            </tr>
       
                <tr>
                <td>Medicamento 1</td>
                <td>Proveedor A</td>
                <td>€100.00</td>
                <td>No</td>
                </tr>
        </table>
    </div>
</body>
</html>
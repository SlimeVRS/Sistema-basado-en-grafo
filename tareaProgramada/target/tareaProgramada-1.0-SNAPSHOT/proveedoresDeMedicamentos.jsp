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
    <h1>Buscar Proveedor de Medicamento</h1>
    <form action="SvBuscarProveedor" method="post">
        <label for="medicamento">Ingrese el nombre del medicamento:</label>
        <input type="text" name="medicamento" required>
        <button type="submit">Buscar Proveedor</button>
    </form>
    <div id="result">
        <!-- Aquí se mostrará el resultado de la búsqueda -->
        <table>
            <tr>
                <th>Nombre del Proveedor</th>
                <th>Contacto</th>
                <th>Teléfono</th>
                <th>Correo Electrónico</th>
            </tr>
            <!-- Aquí se mostrarán los resultados dinámicamente -->
            <tr>
                <td>Proveedor 1</td>
                <td>Contacto 1</td>
                <td>Teléfono 1</td>
                <td>Correo Electrónico 1</td>
            </tr>
            <!-- Agrega más filas para los resultados -->
        </table>
    </div>
</body>
</html>
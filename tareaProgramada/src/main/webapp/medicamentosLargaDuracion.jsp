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
    <h1>Medicamentos para Tratamientos de Larga Duración</h1>
    <form action="SvListarMedicamentosLargaDuracion" method="post">
        <button type="submit">Listar Medicamentos</button>
    </form>
    <div id="result">
        <!-- Aquí se mostrará el resultado de la lista de medicamentos y reemplazos -->
        <table>
            <tr>
                <th>Nombre del Medicamento</th>
                <th>Padecimientos para los que se utiliza</th>
                <th>Posibles Reemplazos</th>
            </tr>
            <!-- Aquí se mostrarán los resultados dinámicamente -->
            <tr>
                <td>Medicamento 1</td>
                <td>Padecimiento 1, Padecimiento 2</td>
                <td>Reemplazo 1, Reemplazo 2</td>
            </tr>
            <!-- Agrega más filas para los resultados -->
        </table>
    </div>
</body>
</html>
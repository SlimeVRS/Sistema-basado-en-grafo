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
        .quadrant {
            width: 50%;
            float: left;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1>CRUD de Medicamentos</h1>
    <div class="quadrant top-left">
        <!-- Contenido del cuadrante superior izquierdo -->
        <form action="SvCrearMedicamento" method="post">
            <label for="nombre">Nombre del Producto Farmacéutico:</label>
            <input type="text" name="nombre" required>
            
            <label for="tipo">Tipo de Fármaco:</label>
            <select name="tipo">
                <!-- Opciones para el tipo de fármaco -->
            </select>
            
            <label for="laboratorio">Nombre del Laboratorio Ofertante:</label>
            <input type="text" name="laboratorio" required>
            
            <label for="estado">Estado:</label>
            <select name="estado">
                <!-- Opciones para el estado del medicamento -->
            </select>
            
            <label for="principioActivo">Principio Activo o Asociación de Principios Activos:</label>
            <input type="text" name="principioActivo" required>
            
            <label for="tratamientoLargaDuracion">Tratamiento de Larga Duración:</label>
            <select name="tratamientoLargaDuracion">
                <!-- Opciones para el tratamiento de larga duración -->
            </select>
            
            <label for="descripcionPrincipioActivo">Descripción Principio Activo:</label>
            <textarea name="descripcionPrincipioActivo" rows="4" cols="50"></textarea>
            
            <label for="presentacion">Presentación:</label>
            <input type="text" name="presentacion">
            
            <label for="fabricante">Fabricante:</label>
            <input type="text" name "fabricante">
            
            <label for="precioMaximo">Precio Máximo de Venta Transacción Final Comercial:</label>
            <input type="number" name="precioMaximo">
            
            <button type="submit">Crear Medicamento</button>
        </form>
    </div>
    
    <!-- Cuadrante superior derecho -->
    <div class="quadrant top-right">
        <!-- Contenido del cuadrante superior derecho -->
        <!-- Puedes agregar aquí el formulario para editar medicamentos -->
    </div>
    
    <!-- Cuadrante inferior izquierdo -->
    <div class="quadrant bottom-left">
        <!-- Contenido del cuadrante inferior izquierdo -->
        <!-- Puedes agregar aquí el formulario para eliminar medicamentos -->
    </div>
    
    <!-- Cuadrante inferior derecho -->
    <div class="quadrant bottom-right">
        <!-- Contenido del cuadrante inferior derecho -->
        <!-- Puedes agregar aquí la lista de medicamentos existentes -->
    </div>
    
</body>
</html>
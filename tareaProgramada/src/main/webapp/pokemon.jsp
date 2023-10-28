<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Resultados de Pokémon</title>
</head>
<body>
    <h1>Resultados de Pokémon</h1>
    <script type="text/javascript">

        // Llamada al API de Pokémon
        var apiUrl = "https://pokeapi.co/api/v2/pokemon/1"; // Ejemplo: Consultar el Pokémon con ID 1
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Muestra los resultados en la página
                document.getElementById("resultado").textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    </script>

    <!-- Mostrar los resultados aquí -->
    <pre id="resultado"></pre>

    <a href="index.jsp">Volver</a> <!-- Enlace para volver a la página anterior -->
</body>
</html>
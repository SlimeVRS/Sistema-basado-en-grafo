
<%@ page contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
         body {
           margin: 0; /* Elimina los márgenes predeterminados del body */
           background-image: url('pills2.avif'); /* Ruta de la imagen de fondo */
           background-size: cover;
           background-repeat: no-repeat;
           background-attachment: fixed;
           background-color: #87CEEB; /* Color celeste cielo */
           font-family: Arial, sans-serif;
           text-align: left; /* Alinea todo el contenido a la izquierda */
           padding: 20px;
         }

         h1 {
           color: #333;
         }

         label {
           font-weight: bold;
           color: #333;
           display: block; /* Hace que las etiquetas se muestren en una línea separada */
           margin-bottom: 5px; /* Agrega espacio inferior entre etiquetas */
         }

         input[type="text"] {
           padding: 10px;
           border: 1px solid #ccc;
           border-radius: 5px;
           width: 100%; /* Ocupa todo el ancho disponible */
         }

         button {
           background-color: #007BFF; /* Color del botón */
           color: white;
           border: none;
           border-radius: 5px;
           padding: 10px 20px;
           font-size: 18px;
           cursor: pointer;
         }

         button:hover {
           background-color: #0056b3; /* Color del botón al pasar el ratón */
         }

         #result {
           margin-top: 20px;
           padding: 20px;
           background-color: rgba(135, 206, 235, 0.8); /* Fondo celeste semi-transparente */
           border-radius: 5px;
           box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
           text-align: left; /* Alinea el resultado a la izquierda */
         }
    </style>
</head>
<body>
    <h1>Búsqueda de Principio Activo</h1>
    
    <form action="SvEncontrarFabicante" method="post">
        <label for="principioActivo">Ingrese el principio activo:</label>
        <input type="text" id="principioActivo" name="principioActivo" required>
        <button type="submit">Buscar</button>
    </form>
    <form action="/tareaProgramada" method="post">
            <button class="button" type="submit" name="salir">Volver</button>
    </form>
    <div id="result">
        <h2>Resultados:</h2>
        <ul>
            <!-- Itera sobre los resultados y muestra la información -->
            <c:forEach items="${resultados}" var="resultado">
                <li>
                    <h3>Fabricante: ${resultado.fabricante}</h3>
                    <p>Presentación: ${resultado.presentacion}</p>
                    <p>Categoría: ${resultado.categoria}</p>
                </li>
            </c:forEach>
        </ul>
        <p>${error}</p>
    </div>
</body>
</html>

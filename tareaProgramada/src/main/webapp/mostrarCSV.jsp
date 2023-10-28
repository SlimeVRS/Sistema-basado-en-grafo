<!DOCTYPE html>
<%@ page isELIgnored="false" %>
<html>
<head>
    <title>Datos del archivo CSV</title>
</head>
<body>
    <h1>Datos del archivo CSV</h1>
    <table>
        <tr>
            <th>Columna 1</th>
            <th>Columna 2</th>
        </tr>
        <c:forEach items="${csvData}" var="row">
            <tr>
                <td>${row[0]}</td>
                <td>${row[1]}</td>
            </tr>
        </c:forEach>
    </table>
</body>
</html>
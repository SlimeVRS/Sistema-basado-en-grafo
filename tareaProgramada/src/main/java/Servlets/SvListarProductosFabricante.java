package Servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/SvListarProductosFabricante")
public class SvListarProductosFabricante extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Recupera el fabricante seleccionado por el usuario
        String fabricante = request.getParameter("fabricante");

        // Realiza la lógica para listar los productos del fabricante que no están en la CCSS
        // Debes consultar la base de datos o fuente de datos para obtener los datos necesarios

        // Una vez tengas los datos, almacénalos en una lista (por ejemplo, List<ProductoFabricante>)

        // Establece la lista de productos como un atributo en la solicitud para mostrarla en el JSP
        // request.setAttribute("productosFabricante", productosFabricante);

        // Redirige al JSP de resultados
        request.getRequestDispatcher("CargaExitosa.jsp").forward(request, response);
    }
}
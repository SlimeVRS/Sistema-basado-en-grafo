package Servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/SvBuscarProveedor")
public class SvBuscarProveedor extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Recupera el nombre del medicamento ingresado por el usuario
        String medicamento = request.getParameter("medicamento");

        // Realiza la lógica para buscar posibles proveedores del medicamento
        // Debes consultar la base de datos o fuente de datos para obtener los datos necesarios

        // Una vez tengas los datos, almacénalos en una lista (por ejemplo, List<Proveedor>)

        // Establece la lista de proveedores como un atributo en la solicitud para mostrarla en el JSP
        // request.setAttribute("proveedores", proveedores);

        // Redirige al JSP de resultados
        request.getRequestDispatcher("CargaExitosa.jsp").forward(request, response);
    }
}

package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Sebas
 */
@WebServlet("/SvGenerarReporteMedicamentos")
public class SvGenerarReporteMedicamentos extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Recupera la enfermedad seleccionada por el usuario
        String enfermedad = request.getParameter("enfermedad");

        // Realiza la lógica para generar el reporte de medicamentos potenciales
        // Debes consultar la base de datos o fuente de datos para obtener los datos necesarios

        // Una vez tengas los datos, almacénalos en una lista (por ejemplo, List<Medicamento>)

        // Establece la lista de medicamentos como un atributo en la solicitud para mostrarla en el JSP
        // request.setAttribute("medicamentos", medicamentos);

        // Redirige al JSP de resultados
        request.getRequestDispatcher("reporteMedicamentos.jsp").forward(request, response);
    }
}

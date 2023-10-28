package Servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/SvListarMedicamentosLargaDuracion")
public class SvListarMedicamentosLargaDuracion extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Realiza la lógica para listar medicamentos para tratamientos de larga duración y sus reemplazos
        // Debes consultar la base de datos o fuente de datos para obtener los datos necesarios

        // Una vez tengas los datos, almacénalos en una lista (por ejemplo, List<MedicamentoLargaDuracion>)

        // Establece la lista de medicamentos como un atributo en la solicitud para mostrarla en el JSP
        // request.setAttribute("medicamentosLargaDuracion", medicamentosLargaDuracion);

        // Redirige al JSP de resultados
        request.getRequestDispatcher("CargaExitosa.jsp").forward(request, response);
    }
}
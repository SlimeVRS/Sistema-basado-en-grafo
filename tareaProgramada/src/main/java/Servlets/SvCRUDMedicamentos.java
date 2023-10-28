/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Servlets;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.RequestDispatcher;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import logicaDeNegocios.Medicamento;

@WebServlet("/SvCRUDMedicamentos")
public class SvCRUDMedicamentos extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String action = request.getParameter("action");

        if (action != null) {
            if (action.equals("crear")) {
                // Lógica para crear un medicamento en la base de datos
                // Debes obtener los datos del formulario y realizar la inserción
            }
        }

        // Redirige de vuelta a la página de CRUD
        response.sendRedirect("crud.jsp");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        String action = request.getParameter("action");

        if (action != null) {
            if (action.equals("listar")) {
                // Lógica para listar los medicamentos en la base de datos
                // Debes obtener los datos de la base de datos y almacenarlos en una lista
                List<Medicamento> listaMedicamentos = obtenerListaMedicamentos(); // Implementa esta función

                request.setAttribute("listaMedicamentos", listaMedicamentos);
                RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/crud.jsp");
                dispatcher.forward(request, response);
            }
        } else {
            // Redirige de vuelta a la página de CRUD
            response.sendRedirect("crud.jsp");
        }
    }
    
    // Implementa la lógica para obtener la lista de medicamentos desde la base de datos
    private List<Medicamento> obtenerListaMedicamentos() {
        // Lógica para obtener los medicamentos de la base de datos
        // Debes reemplazar esto con tu propia implementación
        
        // Ejemplo de datos ficticios
        List<Medicamento> listaMedicamentos = new ArrayList<>();
        listaMedicamentos.add(new Medicamento(1, "Medicamento 1", "Tipo 1", "Laboratorio 1", "Activo", "Principio Activo 1", true, "Descripción 1", "Presentación 1", "Fabricante 1", 100.00, "Servicio 1", 10, 5.00, "Marca 1"));
        listaMedicamentos.add(new Medicamento(2, "Medicamento 2", "Tipo 2", "Laboratorio 2", "Inactivo", "Principio Activo 2", false, "Descripción 2", "Presentación 2", "Fabricante 2", 150.00, "Servicio 2", 20, 7.00, "Marca 2"));
        // Agrega más medicamentos según sea necesario

        return listaMedicamentos;
    }
}
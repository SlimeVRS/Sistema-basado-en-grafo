/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/SvTop5Medicamentos")
public class SvTop5Medicamentos extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Obtén el departamento seleccionado desde el formulario
        String departamento = request.getParameter("departamento");

        // Simula la obtención de datos (debes personalizar esto)
        //List<Medicamento> medicamentos = obtenerMedicamentosPorDepartamento(departamento);

        // Envía los datos a la página JSP
       // request.setAttribute("medicamentos", medicamentos);
        request.getRequestDispatcher("/Top5Medicamentos.jsp").forward(request, response);
    }

    // Simulación de obtención de datos (reemplaza con la lógica real)
    /*private List<Medicamento> obtenerMedicamentosPorDepartamento(String departamento) {
        // Aquí puedes conectarte a tu fuente de datos y obtener los medicamentos por departamento
        // Ejemplo de lista simulada
        List<Medicamento> medicamentos = new ArrayList<>();
        medicamentos.add(new Medicamento("Medicamento 1", "Proveedor A", "€100.00", "No"));
        // Agrega más medicamentos

        return medicamentos;
    }*/
}
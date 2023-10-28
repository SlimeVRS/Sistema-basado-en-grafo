/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/SvEncontrarFabicante")
public class SvEncontrarFabicante extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.sendRedirect("CargaExitosa.jsp");

    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Obtén el valor del campo "producto" del formulario
        String producto = request.getParameter("producto");

        // Realiza la lógica de búsqueda de productos o principios activos aquí
        // Puedes usar una base de datos o cualquier otro medio para obtener los resultados

        // Supongamos que tienes una lista de resultados (puedes reemplazar esto con tu lógica real)
        //List<Resultado> resultados = buscarResultados(producto);

        // Almacena los resultados en el objeto de solicitud para que se puedan mostrar en el JSP
        //request.setAttribute("resultados", resultados);

        // Redirige al JSP de resultados
         response.sendRedirect("CargaExitosa.jsp");
    }

    // Método de ejemplo para buscar resultados (debes implementar tu propia lógica)
   /* private List<Resultado> buscarResultados(String producto) {
        // Implementa la lógica de búsqueda aquí y devuelve una lista de resultados
        // Puedes consultar una base de datos, un servicio web, etc.
        List<Resultado> resultados = new ArrayList<>();

        // Agrega resultados ficticios a modo de ejemplo
        resultados.add(new Resultado("Fabricante 1", "Ofertante 1", "Presentación 1", "Categoría 1"));
        resultados.add(new Resultado("Fabricante 2", "Ofertante 2", "Presentación 2", "Categoría 2"));

        return resultados;
    }*/
}
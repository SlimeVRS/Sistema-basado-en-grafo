package Servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/SvTop10Suspendidos")
public class SvTop10Suspendidos extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Aquí deberías cargar los datos desde tu fuente de datos (base de datos, servicio web, etc.)
        // En este ejemplo, usamos datos ficticios para ilustrar el concepto.
       // List<PrincipioActivo> principiosActivos = cargarDatosFicticios();

        // Almacena los datos en el objeto de solicitud para que se puedan mostrar en el JSP
       // request.setAttribute("principiosActivos", principiosActivos);

        // Redirige al JSP para mostrar los datos en la tabla
        response.sendRedirect("CargaExitosa.jsp");
        //request.getRequestDispatcher("Top10Suspendidos.jsp").forward(request, response);
    }
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // Lógica para manejar la solicitud POST
     response.sendRedirect("CargaExitosa.jsp");
}
    // Método de ejemplo para cargar datos ficticios (debes implementar tu propia lógica)
  /*  private List<PrincipioActivo> cargarDatosFicticios() {
        List<PrincipioActivo> principiosActivos = new ArrayList<>();

        // Carga datos ficticios (puedes reemplazar esto con tu lógica real)
        principiosActivos.add(new PrincipioActivo("Principio 1", "Proveedor 1"));
        principiosActivos.add(new PrincipioActivo("Principio 2", "Proveedor 2"));
        // Agrega más datos ficticios aquí

        return principiosActivos;
    }*/
}
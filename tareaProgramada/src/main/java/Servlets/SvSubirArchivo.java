package Servlets;

import java.io.IOException;
import java.io.InputStream;
import java.io.FileOutputStream;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;


@WebServlet("/SvSubirArchivo")
@MultipartConfig
public class SvSubirArchivo extends HttpServlet {
    private static final long serialVersionUID = 1L;
    public String uploadPath= "";
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        uploadPath = "C:\\Users\\jalei\\Desktop\\Calidad\\Proyecto_Grupo_7\\tareaProgramada\\src\\main\\webapp";
        try {
            Part filePart = request.getPart("file"); 
            String fileName = getFileName(filePart);
            InputStream fileContent = filePart.getInputStream();
            // Guarda el archivo en el directorio de almacenamiento.
            try (FileOutputStream fos = new FileOutputStream(uploadPath + "/" + fileName)) {
                byte[] buffer = new byte[1024];
                int bytesRead;
                while ((bytesRead = fileContent.read(buffer)) != -1) {
                    fos.write(buffer, 0, bytesRead);
                }
            }

            response.getWriter().println("Archivo subido con éxito.");
            } catch (Exception e) {
            response.getWriter().println("Error al subir el archivo: " + e.getMessage());
        }
        
    }

    private String getFileName(Part part) {
        String contentDisp = part.getHeader("content-disposition");
        String[] tokens = contentDisp.split(";");
        for (String token : tokens) {
            if (token.trim().startsWith("filename")) {
                return token.substring(token.indexOf('=') + 1).trim().replace("\"", "");
            }
        }
        return "";
    }
    
}
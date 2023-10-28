/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package logicaDeNegocios;


import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import java.io.FileReader;
import java.io.IOException;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;

public class Impresora {

    public Impresora(FileReader fileReader) {
    }

    public static void main(String[] args) throws CsvValidationException {
        String csvFile = "C:\\Users\\jalei\\Desktop\\Calidad\\Proyecto_Grupo_7\\tareaProgramada\\src\\main\\webapp\\1.1_Nombre_de_productos_genéricos_y_Farmaceutica(1).csv"; // Reemplaza "tu_archivo.csv" con la ruta al archivo CSV que deseas leer

        try {
            CSVReader reader = new CSVReader(new FileReader(csvFile));
            String[] nextLine;
            
            while ((nextLine = reader.readNext()) != null) {
                // Iteramos a través de las filas del archivo CSV
                for (String token : nextLine) {
                    System.out.print(token + "   "); // Imprimir cada valor en la misma línea
                }
                System.out.println(); // Salto de línea para la siguiente fila
            }

            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
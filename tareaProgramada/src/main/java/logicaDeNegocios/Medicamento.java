package logicaDeNegocios;
import java.util.Date;

public class Medicamento {
    private int id;
    private String nombreProductoFarmaceutico;
    private String tipoFarmaco;
    private String nombreLaboratorioOfertante;
    private String estado;
    private String principioActivo;
    private boolean tratamientoLargaDuracion;
    private String descripcionPrincipioActivo;
    private String presentacion;
    private String fabricante;
    private double precioMaximoVenta;
    private String servicio;
    private int piezasSolicitadas;
    private double precioUnitario;
    private String marca;
    
    // Constructor
    public Medicamento(int id, String nombreProductoFarmaceutico, String tipoFarmaco, String nombreLaboratorioOfertante,
                       String estado, String principioActivo, boolean tratamientoLargaDuracion, String descripcionPrincipioActivo,
                       String presentacion, String fabricante, double precioMaximoVenta, String servicio, int piezasSolicitadas,
                       double precioUnitario, String marca) {
        this.id = id;
        this.nombreProductoFarmaceutico = nombreProductoFarmaceutico;
        this.tipoFarmaco = tipoFarmaco;
        this.nombreLaboratorioOfertante = nombreLaboratorioOfertante;
        this.estado = estado;
        this.principioActivo = principioActivo;
        this.tratamientoLargaDuracion = tratamientoLargaDuracion;
        this.descripcionPrincipioActivo = descripcionPrincipioActivo;
        this.presentacion = presentacion;
        this.fabricante = fabricante;
        this.precioMaximoVenta = precioMaximoVenta;
        this.servicio = servicio;
        this.piezasSolicitadas = piezasSolicitadas;
        this.precioUnitario = precioUnitario;
        this.marca = marca;
    }

    // Getters y setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreProductoFarmaceutico() {
        return nombreProductoFarmaceutico;
    }

    public void setNombreProductoFarmaceutico(String nombreProductoFarmaceutico) {
        this.nombreProductoFarmaceutico = nombreProductoFarmaceutico;
    }

    public String getTipoFarmaco() {
        return tipoFarmaco;
    }

    public void setTipoFarmaco(String tipoFarmaco) {
        this.tipoFarmaco = tipoFarmaco;
    }

    public String getNombreLaboratorioOfertante() {
        return nombreLaboratorioOfertante;
    }

    public void setNombreLaboratorioOfertante(String nombreLaboratorioOfertante) {
        this.nombreLaboratorioOfertante = nombreLaboratorioOfertante;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getPrincipioActivo() {
        return principioActivo;
    }

    public void setPrincipioActivo(String principioActivo) {
        this.principioActivo = principioActivo;
    }

    public boolean isTratamientoLargaDuracion() {
        return tratamientoLargaDuracion;
    }

    public void setTratamientoLargaDuracion(boolean tratamientoLargaDuracion) {
        this.tratamientoLargaDuracion = tratamientoLargaDuracion;
    }

    public String getDescripcionPrincipioActivo() {
        return descripcionPrincipioActivo;
    }

    public void setDescripcionPrincipioActivo(String descripcionPrincipioActivo) {
        this.descripcionPrincipioActivo = descripcionPrincipioActivo;
    }

    public String getPresentacion() {
        return presentacion;
    }

    public void setPresentacion(String presentacion) {
        this.presentacion = presentacion;
    }

    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public double getPrecioMaximoVenta() {
        return precioMaximoVenta;
    }

    public void setPrecioMaximoVenta(double precioMaximoVenta) {
        this.precioMaximoVenta = precioMaximoVenta;
    }

    public String getServicio() {
        return servicio;
    }

    public void setServicio(String servicio) {
        this.servicio = servicio;
    }

    public int getPiezasSolicitadas() {
        return piezasSolicitadas;
    }

    public void setPiezasSolicitadas(int piezasSolicitadas) {
        this.piezasSolicitadas = piezasSolicitadas;
    }

    public double getPrecioUnitario() {
        return precioUnitario;
    }

    public void setPrecioUnitario(double precioUnitario) {
        this.precioUnitario = precioUnitario;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }
}
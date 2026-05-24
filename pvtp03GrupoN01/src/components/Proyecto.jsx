import { useState } from "react";
import proyectService from "../services/proyectoService.js";
import FormProyecto from "./FormProyecto.jsx"
import ListProject from "./ListaProyectos.jsx"; 
import DetalleProyecto from "./DetalleProyecto.jsx"

const Proyectos = () => {
    const [proyectos, setProyectos] = useState(proyectService.obtenerProyectos());
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    
    // Estado para la búsqueda dinámica
    const [busqueda, setBusqueda] = useState("");

    console.log(proyectos);

    const manejarEnvio = (proyectoDelFormulario) => {
        proyectService.agregarProyecto(proyectoDelFormulario);
        setProyectos(proyectService.obtenerProyectos());
    };

    const manejarVerDetalle = (proyecto) => {
        setProyectoSeleccionado(proyecto);
    };

    const manejarCerrarDetalle = () => {
        setProyectoSeleccionado(null);
    };

    // Eliminar proyecto (llama al servicio modificado y actualiza el estado de React)
    const manejarEliminar = (id) => {
        proyectService.eliminarProyecto(id);
        setProyectos(proyectService.obtenerProyectos()); 
    };

    // FILTRADO DINÁMICO: Filtra por activos (baja lógica) y por texto al mismo tiempo
    const proyectosVisiblesYFiltrados = proyectos.filter((proyecto) => {
        const estaActivo = proyecto.activo !== false;
        const coincideTexto = proyecto.titulo.toLowerCase().includes(busqueda.toLowerCase());
        return estaActivo && coincideTexto;
    });

    return (
        <>
            <FormProyecto agregarProyecto={ manejarEnvio } />

            {/* Buscador Dinámico */}
            <div className="contenedor-buscador" style={{ margin: '20px 0', textAlign: 'center' }}>
                <input 
                    type="text"
                    placeholder="Buscar proyecto por título..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    style={{ 
                        padding: '10px 15px', 
                        width: '100%', 
                        maxWidth: '400px', 
                        borderRadius: '6px', 
                        border: '1px solid #ccc',
                        fontSize: '16px'
                    }}
                />
            </div>

            {/* Le pasamos la lista ya filtrada */}
            <ListProject
                proyectos={ proyectosVisiblesYFiltrados }
                verDetalle={ manejarVerDetalle }
                eliminarProyecto={ manejarEliminar }
            />

            <DetalleProyecto
                proyecto={ proyectoSeleccionado } 
                cerrar={ manejarCerrarDetalle }
            />
        </>
    );
};

export default Proyectos;
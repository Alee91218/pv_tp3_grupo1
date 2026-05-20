import { useState } from "react";
import proyectService from "../services/proyectoService.js";
import FormProyecto from "./FormProyecto.jsx"
import ListProject from "./ListaProyectos.jsx"; 
import DetalleProyecto from "./DetalleProyecto.jsx"

const Proyectos = () => {
    const [proyectos, setProyectos] = useState(proyectService.obtenerProyectos());
    const [proyectoSeleccionado, setproyectoSeleccionado] = useState(null);

    const manejarEnvio = (proyectoDelFormulario) => {
        proyectService.agregarProyecto(proyectoDelFormulario);
        setProyectos(proyectService.obtenerProyectos());
    };

    const manejarVerDetalle = (proyecto) => {
        setproyectoSeleccionado(proyecto);
    };

    const manejarCerrarDetalle = () => {
        setproyectoSeleccionado(null);
    };

    // CAMBIO IMPORTANTE: Nueva función para eliminar conectada al estado principal de React
    const manejarEliminar = (id) => {
        proyectService.eliminarProyecto(id);
        setProyectos(proyectService.obtenerProyectos()); 
    };

    // CAMBIO IMPORTANTE: Nueva función para capturar la búsqueda y filtrar dinámicamente
    const manejarBuscar = (texto) => {
        if (texto.trim() === '') {
            setProyectos(proyectService.obtenerProyectos());
        } else {
            setProyectos(proyectService.buscarProyecto(texto));
        }
    };

    return (
        <>
            <FormProyecto agregarProyecto={ manejarEnvio } />

            {/* CAMBIO IMPORTANTE: Pasamos las funciones onEliminar y onBuscar como props al listado */}
            <ListProject
                proyectos={ proyectos }
                verDetalle={ manejarVerDetalle }
                onEliminar={ manejarEliminar }
                onBuscar={ manejarBuscar }
            />

            <DetalleProyecto
                proyecto={ proyectoSeleccionado } 
                cerrar={ manejarCerrarDetalle }
            />
        </>
    );
};

export default Proyectos;
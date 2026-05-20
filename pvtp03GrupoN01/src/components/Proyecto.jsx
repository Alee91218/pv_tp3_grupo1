import '../css/styles.css'
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
        console.log(proyectos);
    };

    const manejarVerDetalle = (proyecto) => {
        setproyectoSeleccionado(proyecto);
    };

    const manejarCerrarDetalle = () => {
        setproyectoSeleccionado(null);
    };

    return (
        <>
            <FormProyecto agregarProyecto={ manejarEnvio } />

            <ListProject
                proyectos={ proyectos }
                verDetalle={ manejarVerDetalle }
            />

            <DetalleProyecto
                proyecto={ proyectoSeleccionado } //cambio usuario por proyecto
                cerrar={ manejarCerrarDetalle }
            />
        </>
    );
};

export default Proyectos;

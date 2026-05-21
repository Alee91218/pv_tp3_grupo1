import { useState } from "react";
import proyectService from "../services/proyectoService.js";
import FormProyecto from "./FormProyecto.jsx"
import ListProject from "./ListaProyectos.jsx"; 
import DetalleProyecto from "./DetalleProyecto.jsx"

const Proyectos = () => {
    const [proyectos, setProyectos] = useState(proyectService.obtenerProyectos());
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
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


     //eliminar proyecto
  const manejarEliminar = (id) => {
    proyectService.eliminarProyecto(id);
    setProyectos(proyectService.obtenerProyectos()); // actualiza la list
  };


    return (
        <>
            <FormProyecto agregarProyecto={ manejarEnvio } />

            <ListProject
                proyectos={ proyectos }
                verDetalle={ manejarVerDetalle }
                eliminarProyecto={ manejarEliminar}
            />

            <DetalleProyecto
                proyecto={ proyectoSeleccionado } 
                cerrar={ manejarCerrarDetalle }
            />
        </>
    );
};

export default Proyectos;
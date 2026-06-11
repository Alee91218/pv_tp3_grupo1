import { useState } from "react";
import { useNavigate } from "react-router-dom"; // CAMBIO LEANDRO: Importamos useNavigate para cambiar de ruta
import proyectService from "../services/proyectoService.js";
import FormProyecto from "./FormProyecto.jsx"
import ListProject from "./ListaProyectos.jsx"; 

const Proyectos = ({ proyectos = [], setProyectos }) => {
    const navigate = useNavigate(); // CAMBIO LEANDRO: Instanciamos el navegador de React Router
    
    // Estado para la búsqueda dinámica
    const [busqueda, setBusqueda] = useState("");

    console.log(proyectos);

    const manejarEnvio = (proyectoDelFormulario) => {
        proyectService.agregarProyecto(proyectoDelFormulario);
        // Actualiza el estado de React de forma global con una nueva referencia ([...])
        setProyectos([...proyectService.obtenerProyectos()]);
    };

    // CAMBIO LEANDRO: Ahora redirige a la ruta dinámica independiente en vez de abrir un estado modal
    const manejarVerDetalle = (proyecto) => {
        navigate(`/proyectos/${proyecto.id}`);
    };

    // Eliminar proyecto (llama al servicio modificado y actualiza el estado de React globalmente)
    const manejarEliminar = (id) => {
        proyectService.eliminarProyecto(id);
        setProyectos([...proyectService.obtenerProyectos()]); 
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

            {/* Buscador Dinámico (Migrado a HTML Semántico y Bootstrap) */}
            <section className="contenedor-buscador my-4 d-flex justify-content-center px-3" style={{ textAlign: 'center' }}>
                <input 
                    type="text"
                    className="form-control text-center"
                    placeholder="Buscar proyecto por título..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    style={{ 
                        padding: '10px 15px', 
                        width: '100%', 
                        maxWidth: '400px', 
                        fontSize: '16px'
                    }}
                />
            </section>

            {/* Le pasamos la lista ya filtrada */}
            <ListProject
                proyectos={ proyectosVisiblesYFiltrados }
                verDetalle={ manejarVerDetalle }
                eliminarProyecto={ manejarEliminar }
            />

            {/* CAMBIO LEANDRO: Se removió <DetalleProyecto /> de aquí porque ahora se renderiza de forma independiente mediante su propia ruta en App.jsx */}
        </>
    );
};

export default Proyectos;
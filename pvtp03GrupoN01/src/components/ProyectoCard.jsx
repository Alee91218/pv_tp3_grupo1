const CardProject = ({ proyecto, verDetalle, eliminarProyecto }) => {
    const { id, titulo, categoria, estado } = proyecto;
    return (
        <article className="tarjeta">
            <h3>{titulo}</h3>
            <p>
                <strong>Categoría:</strong> {categoria}
            </p>
           <p>
                <strong>Estado:</strong> {estado ? 'En curso' : 'Terminado'}
            </p>
            <button 
                className="boton-eliminar"
                onClick={() => eliminarProyecto(id)}
            >
                Eliminar
            </button>
            {/* Al hacer clic aquí, se ejecuta la nueva lógica de Leandro que te redirige a /proyectos/:id */}
            <button 
                className="boton-accion" 
                onClick={() => verDetalle(proyecto)}
            >
                Ver Detalles
            </button>

        </article>
    );
};

export default CardProject;
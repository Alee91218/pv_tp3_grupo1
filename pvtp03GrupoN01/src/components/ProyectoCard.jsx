
const CardProject = ({ proyecto, verDetalle,eliminarProyecto }) => {
    const { id,titulo,categoria,estado } = proyecto;
    return (
        <article className="tarjeta">
            <h3>{titulo}</h3>
            <p>{categoria}</p>
            <p>{estado ? 'En curso' : 'Terminado'}</p>
            <button onClick={() => eliminarProyecto(id)}>
                Eliminar
            </button>
            <button 
                className="boton-accion" 
                onClick = {() => verDetalle(proyecto)}
            >
                Ver Detalles
            </button>

        </article>
    );
};

export default CardProject;
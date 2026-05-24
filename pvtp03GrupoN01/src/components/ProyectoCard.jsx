
const CardProject = ({ proyecto, verDetalle,eliminarProyecto }) => {
    const { id,titulo,categoria,estado } = proyecto;
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
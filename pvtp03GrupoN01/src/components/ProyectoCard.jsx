
const CardProject = ({ proyecto, verDetalle }) => {
    const { id,titulo,categoria,estado } = proyecto;
    return (
        <article className="tarjeta">
            <h3>{titulo}</h3>
            <p>{categoria}</p>
            <p>{estado ? 'Terminado' : 'En curso'}</p>
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

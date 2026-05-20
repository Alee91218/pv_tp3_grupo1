// CAMBIO IMPORTANTE: Recibimos la prop onEliminar en la tarjeta
const CardProject = ({ proyecto, verDetalle, onEliminar }) => {
    const { id, titulo, categoria, estado } = proyecto;
    
    return (
        <article className="tarjeta">
            <h3>{titulo}</h3>
            <p><strong>Categoría:</strong> {categoria}</p>
            <p><strong>Estado:</strong> {estado ? 'Terminado' : 'En curso'}</p>
            
            <div className="acciones-card">
                <button 
                    className="boton-accion" 
                    onClick={() => verDetalle(proyecto)}
                >
                    Ver Detalles
                </button>
                
                {/* CAMBIO IMPORTANTE: Botón de eliminar que envía el id del proyecto al hacer click */}
                <button 
                    className="boton-eliminar" 
                    onClick={() => onEliminar(id)}
                    style={{ backgroundColor: '#ff4d4d', color: 'white', marginLeft: '10px', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                >
                    Eliminar
                </button>
            </div>
        </article>
    );
};

export default CardProject;
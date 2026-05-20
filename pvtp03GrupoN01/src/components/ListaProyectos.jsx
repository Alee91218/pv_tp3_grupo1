// CAMBIO IMPORTANTE: Corregida la ruta del import con un solo punto './' porque ya estamos dentro de components
import ProyectoCard from './ProyectoCard.jsx'; 

// CAMBIO IMPORTANTE: Recibimos onEliminar y onBuscar desestructurados desde las props del padre
const ListaProyectos = ({ proyectos, verDetalle, onEliminar, onBuscar }) => {

    const alCambiarBusqueda = (e) => {
        onBuscar(e.target.value);
    };

    return (
        <section>
            <h2>Listado de Proyectos</h2>
            
            {/* CAMBIO IMPORTANTE: Input con onChange para activar la búsqueda dinámica en tiempo real */}
            <div className="buscador-contenedor">
                <input 
                    type="text"
                    placeholder="Buscar proyecto por título..."
                    onChange={alCambiarBusqueda}
                />
            </div>

            <div className="proyectos-lista">
                {proyectos.length > 0 ? (
                    proyectos.map((proyecto) => (
                        <ProyectoCard 
                            key={proyecto.id} 
                            proyecto={proyecto} 
                            verDetalle={verDetalle}
                            onEliminar={onEliminar} // Pasamos la función a la tarjeta individual
                        />
                    ))
                ) : (
                    <p>No se encontraron proyectos.</p>
                )}
            </div>
        </section>
    );
};

export default ListaProyectos;
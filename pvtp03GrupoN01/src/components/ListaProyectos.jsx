// CAMBIO IMPORTANTE: Corregida la ruta del import con un solo punto './' porque ya estamos dentro de components
import ProyectoCard from './ProyectoCard.jsx'; 

// CAMBIO IMPORTANTE: Recibimos onEliminar y onBuscar desestructurados desde las props del padre
const ListaProyectos = ({ proyectos, verDetalle, onEliminar, onBuscar }) => {


const ListProject = ({ proyectos, verDetalle,eliminarProyecto}) => {
  if(proyectos.length === 0) return <p>No hay proyectos registrados</p>

  return (
   <section className="contenedor-tarjetas">
            {proyectos.map((proyecto) => (
                <CardProject
                    key={proyecto.id}
                    proyecto={proyecto}
                    eliminarProyecto={eliminarProyecto}
                    verDetalle={verDetalle}

        </section>
    );
};

export default ListaProyectos;
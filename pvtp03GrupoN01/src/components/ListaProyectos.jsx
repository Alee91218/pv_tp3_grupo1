import CardProject from "./ProyectoCard.jsx";

const ListProject = ({ proyectos, verDetalle,eliminarProyecto}) => {
  if(proyectos.length === 0) 
    return <p className="mensaje-vacio">No hay proyectos registrados</p>;

  return (
   <section className="contenedor-tarjetas">
            {proyectos.map((proyecto) => (
                <CardProject
                    key={proyecto.id}
                    proyecto={proyecto}
                    eliminarProyecto={eliminarProyecto}
                    verDetalle={verDetalle}
                />
            ))}
        </section>
    );

};
export default ListProject;
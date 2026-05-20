
import CardProject from "./ProyectoCard.jsx";

const ListProject = ({ proyectos, verDetalle}) => {
  if(proyectos.length === 0) return <p>No hay proyectos registrados</p>

  return (
   <section className="contenedor-tarjetas">
            {proyectos.map((proyecto) => (
                <CardProject
                    key={proyecto.id}
                    proyecto={proyecto}
                    verDetalle={verDetalle}
                />
            ))}
        </section>
    );

};
export default ListProject;

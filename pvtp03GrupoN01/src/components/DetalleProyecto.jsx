const DetalleProyecto = ({ proyecto, cerrar }) => {
  //recibe el proyecto y una funcion para cerrar el detalle

  if (!proyecto) {
    return null;
  }

 /* const { titulo, descripcion, estado, categoria, recursos, equipo } = proyecto;*/

  return (
    <div className="detalle-overlay">
      <div className="detalle-contenedor">
        <h2>{proyecto.titulo}</h2>
        <p><strong>Categoría:</strong> {proyecto.categoria}</p>
        <p><strong>Descripcion:</strong> {proyecto.descripcion}</p>
        <p><strong>Recursos:</strong></p>
        <li>{proyecto.pdf}</li>
        <li>{proyecto.drive}</li>
        <li>{proyecto.github}</li>
        <p><strong>Equipo:</strong></p>
        <li>{proyecto.integrante1}</li>
        <p><strong>Rol: </strong>{proyecto.rol1}</p>
         <li>{proyecto.integrante2}</li>
        <p><strong>Rol: </strong>{proyecto.rol2}</p>
        <p><strong>Estado:</strong> {proyecto.estado ? 'En Curso' : 'En Terminado'}</p>
        <button onClick={cerrar}>
                Cerrar
            </button>
      </div>
    </div>
)};
export default DetalleProyecto;

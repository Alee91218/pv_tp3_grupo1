const DetalleProyecto = ({ proyecto, cerrar }) => {
  if (!proyecto) {
    return null;
  }

  return (
    <div className="detalle-overlay">
      <div className="detalle-contenedor">
        <h2>{proyecto.titulo}</h2>

        <p>
          <strong>Categoría:</strong> {proyecto.categoria}
        </p>

        <p>
          <strong>Descripción:</strong>
        </p>

        {Array.isArray(proyecto.descripcion) ? (
          proyecto.descripcion.map((texto, index) => <p key={index}>{texto}</p>)
        ) : (
          <p>{proyecto.descripcion}</p>
        )}

        <h3>Recursos</h3>

        <ul>
          <li>
            <a href={proyecto.recursos?.pdf}>PDF</a>
          </li>

          <li>
            <a href={proyecto.recursos?.drive}>Drive</a>
          </li>

          <li>
            <a href={proyecto.recursos?.github}>GitHub</a>
          </li>
        </ul>

        <h3>Equipo</h3>

        <ul>
          {proyecto.equipo?.map((persona, index) => (
            <li key={index}>
              <strong>{persona.nombre}</strong>
              {" - "}
              {persona.rol}
            </li>
          ))}
        </ul>

        <p>
          <strong>Estado:</strong> {proyecto.estado ? "En Curso" : "Terminado"}
        </p>

        <button className="boton-cerrar" onClick={cerrar}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default DetalleProyecto;

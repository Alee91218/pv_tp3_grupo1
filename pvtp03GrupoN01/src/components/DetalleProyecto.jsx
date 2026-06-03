import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import proyectService from "../Services/proyectoService";

const DetalleProyecto = () => {
  // CAMBIO LEANDRO: Captura el parámetro 'id' directo desde la URL del navegador usando useParams
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [proyecto, setProyecto] = useState(null);

  // CAMBIO LEANDRO: Efecto para resolver la persistencia si el usuario refresca (F5) la página independiente
  useEffect(() => {
    const encontrado = proyectService.obtenerProyectoPorId(id);
    setProyecto(encontrado);
  }, [id]);

  // Manejo de caso por si ingresan una ID inexistente o manual errónea en la barra de direcciones
  if (!proyecto) {
    return (
      <div className="detalle-contenedor" style={{ padding: "20px", textAlign: "center" }}>
        <h2>Proyecto no encontrado</h2>
        <button className="boton-cerrar" onClick={() => navigate("/proyectos")}>
          Volver a Proyectos
        </button>
      </div>
    );
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
        <p>{proyecto.descripcion}</p>

        <h3>Recursos</h3>
        <ul>
          <li>
            <a href={proyecto.pdf} target="_blank" rel="noopener noreferrer">
              PDF
            </a>
          </li>
          <li>
            <a href={proyecto.drive} target="_blank" rel="noopener noreferrer">
              Drive
            </a>
          </li>
          <li>
            <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>

        <h3>Equipo</h3>
        <ul>
          <li>
            <strong>{proyecto.integrante1}</strong> - {proyecto.rol1}
          </li>
          <li>
            <strong>{proyecto.integrante2}</strong> - {proyecto.rol2}
          </li>
        </ul>

        <p>
          <strong>Estado:</strong> {proyecto.estado ? "En Curso" : "Terminado"}
        </p>

        {/* CAMBIO LEANDRO: Se reemplaza el prop 'cerrar' por navegación reactiva para volver a la ruta padre */}
        <button className="boton-cerrar" onClick={() => navigate("/proyectos")}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default DetalleProyecto;

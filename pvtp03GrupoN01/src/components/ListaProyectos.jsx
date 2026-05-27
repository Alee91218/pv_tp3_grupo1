import { useEffect, useState, useRef } from "react";
import CardProject from "./ProyectoCard.jsx";
import RegistroActividad from "./RegistroActividad.jsx"; // Importamos tu componente

const ListProject = ({ proyectos, verDetalle, eliminarProyecto }) => {
  // 1. Estado para guardar la fecha y hora de la última actualización
  const [fechaActualizacion, setFechaActualizacion] = useState(null);

  // 2. useRef para crear la bandera (flag) y evitar la ejecución en la carga inicial
  const esCargaInicial = useRef(true);
  const cantidadInicial = useRef(proyectos.length);
  // 3. useEffect que escucha SOLO los cambios en el arreglo de proyectos
  useEffect(() => {
    // Si es la primera vez que se monta el componente, cambiamos la bandera y no hacemos nada
    if (esCargaInicial.current) {
      esCargaInicial.current = false;
      return;
    }
    if (proyectos.length === cantidadInicial.current) {
      return;
    }
    // Si no es la carga inicial, significa que se agregó o eliminó un proyecto
    const ahora = new Date();
    const fechaHoraFormateada = ahora.toLocaleString(); // Formato legible: DD/MM/AAAA, HH:MM:SS
    setFechaActualizacion(fechaHoraFormateada);
    

  }, [proyectos.length]); // Dependencia estricta: solo se dispara si cambia 'proyectos'

  // Mantenemos tu validación intacta
  if (proyectos.length === 0) {
    return <p className="mensaje-vacio">No hay proyectos registrados</p>;
  }

  return (
    <>
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

      {/* 4. Renderizado condicional: Solo se muestra si ya hubo alguna modificación */}
      {fechaActualizacion && (
        <RegistroActividad ultimaActualizacion={fechaActualizacion} />
      )}
    </>
  );
};

export default ListProject;
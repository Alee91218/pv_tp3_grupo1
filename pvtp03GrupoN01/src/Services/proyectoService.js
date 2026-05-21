const proyectService = (() => {
  let proyectos = [
    {
      id: 1,
      titulo: "Plataforma Educativa",
      categoria: "Programación",
      estado: true,
      descripcion: `La plataforma educativa permite administrar cursos, estudiantes y contenidos de manera organizada. Los docentes pueden cargar materiales, actividades y evaluaciones para facilitar el aprendizaje. Ademas , los estudiantes pueden acceder al contenido desde cualquier dispositivo, realizar entregas online y comunicarse con sus profesores mediante herramientas integradas.`,
      pdf: `https://ejemplo.com/plataformaeducativa.pdf`,
      drive: `https://drive.google.com/`,
      github: `https://github.com/",`,
      integrante1: `Facundo`,
      rol1: `Frontend`,
      integrante2: `Alejandro`,
      rol2: `Backend`,
    },
    {
      id: 2,
      titulo: "App de Tareas",
      categoria: "Productividad",
      estado: false,
      descripcion: `La aplicacion ayuda a los estudiantes a organizar tareas, trabajos practicos y examenes en un solo lugar. Incluye recordatorios automaticos,categorias personalizadas y seguimiento del progreso academico.`,
      pdf: `https://ejemplo.com/tareas.pdf`,
      drive: `https://drive.google.com/`,
      github: `https://github.com/`,
      integrante1: `Leandro`,
      rol1: `Diseño UI`,
      integrante2: `Jonatan`,
      rol2: `Testing`,
    },
    {
      id: 3,
      titulo: "Huerto Escolar",
      categoria: "Biología",
      estado: false,
      descripcion: `El proyecto de huerto escolar busca enseñar a los estudiantes sobre cultivo sostenible, cuidado ambiental y alimentacion saludable mediante actividades practicas. Los alumnos participan en la preparacion de la tierra,plantacion y mantenimiento de cultivos,desarrollando trabajo en equipo y conciencia ecologica.`,
      pdf: `https://ejemplo.com/huerta.pdf`,
      drive: `https://drive.google.com/`,
      github: `https://github.com/`,
      integrante1: `Camila`,
      rol1: `Investigacion`,
      integrante2: `Sofia`,
      rol2: `Coordinadora`,
    },
    {
      id: 4,
      titulo: "Robótica Educativa",
      categoria: "Ingeniería",
      estado: true,
      descripcion: `El proyecto de robotica educativa introduce a los estudiantes en conceptos de programacion y automatizacion utilizando kits electronicos y sensores. Los participantes diseñan y programan robots capaces de realizar tareas simples, fomentando la creatividad y el pensamiento logico.`,
      pdf: `https://ejemplo.com/robotica.pdf`,
      drive: `https://drive.google.com/`,
      github: `https://github.com/`,
      integrante1: `Franco`,
      rol1: `Diseño UI`,
      integrante2: `Martina`,
      rol2: `Electronica`,
    },
    {
      id: 5,
      titulo: "Taller Deportivo",
      categoria: "Educacion Física",
      estado: false,
      descripcion: `El taller deportivo promueve la actividad fisica y el trabajo en equipo mediante distintas disciplinas deportivas adaptadas a los estudiantes. Ademas de mejorar la condicion fisica, el proyecto busca fortalecer valores como el compañerismo, la disciplina y el respeto.`,
      pdf: `https://ejemplo.com/deportivo.pdf`,
      drive: `https://drive.google.com/`,
      github: `https://github.com/`,
      integrante1: `Lucas`,
      rol1: `Entrenador`,
      integrante2: `Valentina`,
      rol2: `Asistente`,
    },
  ];

  const obtenerProyectos = () => {
    return [...proyectos];
  };

  const agregarProyecto = (p) => {
    const nuevoProyecto = { ...p, id: Date.now() };
    proyectos.push(nuevoProyecto);
  };

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter((proyecto) => proyecto.id !== id);
  };

  const buscarProyecto = (texto) => {
    return proyectos.filter((proyecto) =>
      proyecto.titulo.toLowerCase().includes(texto.toLowerCase()),
    );
  };
  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto,
  };
})();

export default proyectService;

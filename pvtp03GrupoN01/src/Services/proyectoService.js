const proyectService = (() => {
    let proyectos = [
        { id: 1, titulo: "Plataforma Educativa", categoria: "Programación", estado: true, descripcion: [ "La plataforma educativa permite administrar cursos, estudiantes y contenidos de manera organizada. Los docentes pueden cargar materiales, actividades y evaluaciones para facilitar el aprendizaje. ", "Ademas , los estudiantes pueden acceder al contenido desde cualquier dispositivo, realizar entregas online y comunicarse con sus profesores mediante herramientas integradas."], recursos: { pdf: "https://ejemplo.com/plataformaeducativa.pdf", drive: "https://drive.google.com/", github:"https://github.com/", }, equipo: [ {nombre: "Facundo", rol:"Frontend"}, {nombre:"Alejandro", rol:"Backend"}, ], },
        { id: 2, titulo: "App de Tareas", categoria: "Productividad", estado: false , descripcion: ["La aplicacion ayuda a los estudiantes a organizar tareas, trabajos practicos y examenes en un solo lugar.", "Incluye recordatorios automaticos,categorias personalizadas y seguimiento del progreso academico."], recursos: { pdf:"https://ejemplo.com/tareas.pdf", drive:"https://drive.google.com/", github:"https://github.com/", }, equipo: [ {nombre:"Leandro",rol:"Diseño UI"}, {nombre:"Jonatan",rol:"Testing"} ], },
        { id: 3, titulo: "Huerto Escolar", categoria: "Biología", estado: false, descripcion: ["El proyecto de huerto escolar busca enseñar a los estudiantes sobre cultivo sostenible, cuidado ambiental y alimentacion saludable mediante actividades practicas. ", "Los alumnos participan en la preparacion de la tierra,plantacion y mantenimiento de cultivos,desarrollando trabajo en equipo y conciencia ecologica."], recursos: { pdf:"https://ejemplo.com/huerta.pdf", drive:"https://drive.google.com/", github:"https://github.com/", }, equipo: [ {nombre:"Camila",rol:"Investigacion"}, {nombre:"Sofia",rol:"Coordinadora"}, ], },
        { id: 4, titulo: "Robótica Educativa", categoria: "Ingeniería", estado: true, descripcion: ["El proyecto de robotica educativa introduce a los estudiantes en conceptos de programacion y automatizacion utilizando kits electronicos y sensores.", "Los participantes diseñan y programan robots capaces de realizar tareas simples, fomentando la creatividad y el pensamiento logico."], recursos: { pdf: "https://ejemplo.com/robotica.pdf", drive: "https://drive.google.com/", github: "https://github.com/", }, equipo: [ {nombre:"Franco",rol:"Diseño UI"}, {nombre:"Martina",rol:"Electronica"}, ] },
        { id: 5, titulo: "Taller Deportivo", categoria: "Educacion Física", estado: false, descripcion: ["El taller deportivo promueve la actividad fisica y el trabajo en equipo mediante distintas disciplinas deportivas adaptadas a los estudiantes.", "Ademas de mejorar la condicion fisica, el proyecto busca fortalecer valores como el compañerismo, la disciplina y el respeto."], recursos: { pdf: "https://ejemplo.com/deportivo.pdf", drive: "https://drive.google.com/", github: "https://github.com/", }, equipo: [ {nombre:"Lucas",rol:"Entrenador"}, {nombre:"Valentina",rol:"Asistente"}, ] }
    ];

    const obtenerProyectos = () => {
        return [...proyectos];
    };

    const agregarProyecto = (p) => {
        const nuevoProyecto = { ...p, id: Date.now() };
        proyectos.push(nuevoProyecto);
    };

    // CAMBIO IMPORTANTE: Usamos findIndex y splice para eliminar directamente del array original.
    // Esto hace que el borrado sea persistente en los datos del código y no solo visual.
    const eliminarProyecto = (id) => {
        const indice = proyectos.findIndex(proyecto => proyecto.id === id);
        if (indice !== -1) {
            proyectos.splice(indice, 1);
        }
    };

    const buscarProyecto = (texto) => {
        return proyectos.filter(proyecto => 
            proyecto.titulo.toLowerCase().includes(texto.toLowerCase())
        );
    };

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };
})();

export default proyectService;
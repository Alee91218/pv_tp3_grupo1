const proyectService = (() => {
    let proyectos = [
        { id: 1, titulo: "Plataforma Educativa", categoria: "Programación", estado: true },
        { id: 2, titulo: "App de Tareas", categoria: "Productividad", estado: false },
        { id: 3, titulo: "Huerto Escolar", categoria: "Biología", estado: false },
        { id: 4, titulo: "Robótica Educativa", categoria: "Ingeniería", estado: true },
        { id: 5, titulo: "ATaller Deportivo", categoria: "Educacion Física", estado: false }
];

    const obtenerProyectos = () => {
     return[...proyectos];
    };

    const agregarProyecto = (p) => {
        const nuevoProyecto = {...p, id: Date.now()};
        proyectos.push(nuevoProyecto);
    };

    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(proyecto => proyecto.id !== id);
    };

    const buscarProyecto = (texto) => {
        return proyectos.filter(proyecto => 
        proyecto.titulo.toLowerCase().includes(texto.toLowerCase()));
    };
    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };
})();

export default proyectService;
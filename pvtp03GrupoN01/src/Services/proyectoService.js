let proyectos = [
    { 
        id: 1, 
        titulo: "Plataforma Educativa", 
        categoria: "Programación", 
        estado: "En curso" 
    },
    { 
        id: 2, 
        titulo: "App de Tareas", 
        categoria: "Productividad", 
        estado: "Completado" 
    },
    { 
        id: 3, 
        titulo: "Huerto Escolar", 
        categoria: "Biología", 
        estado: "En curso" 
    },
    { 
        id: 4, 
        titulo: "Robótica Educativa", 
        categoria: "Ingeniería", 
        estado: "En curso" 
    },
    { 
        id: 5, 
        titulo: "ATaller Deportivo", 
        categoria: "Educacion Física", 
        estado: "Completado" 
    }
];

export const obtenerProyectos = () => [...proyectos];

export const agregarProyecto = (nuevoProyecto) => {
    proyectos.push(nuevoProyecto);
};

export const eliminarProyecto = (id) => {
    proyectos = proyectos.filter(proyecto => proyecto.id !== id);
};

export const buscarProyecto = (texto) => {
    return proyectos.filter(proyecto => 
        proyecto.titulo.toLowerCase().includes(texto.toLowerCase())
    );
};

import { useState } from 'react'
import { obtenerProyectos, eliminarProyecto, buscarProyecto } from '../services/proyectoService.js'

const ListaProyectos = () => {
    // estado iniciial
    const [proyectos, setProyectos] = useState(obtenerProyectos())
    //eliminar proyecto
    const manejarEliminar = (id) => {
        eliminarProyecto(id) 
        setProyectos(obtenerProyectos()) // actualiza la list
    }

// buscar proyecto
const manejarBuscar = (e) => {
    const texto = e.target.value
    if (texto === '') {
        setProyectos(obtenerProyectos())
    } else {
        setProyectos(buscarProyecto(texto))
    }
}
return (
    <section>
        <h2>Listado de Proyectos</h2>
        {/* buscador */}
        <input 
            type="text"
            placeholder="Buscar proyecto"
            onChange={manejarBuscar}
        />
        {/* lista dinamica */}
            {
            proyectos.map((proyecto) => (
                <article key={proyecto.id}>
                <h3>{proyecto.titulo}</h3>
                <p> 
                    <strong>Categoria:</strong> {proyecto.categoria}
                </p>
                <p>
                    <strong>Estado:</strong> {proyecto.estado}
                </p>
                {/* boton de eliminar */}
                <button onClick={() => manejarEliminar(proyecto.id)}>
                    Eliminar
                </button>
                </article>
                ))
        }   
    </section>
)
}
export default ListaProyectos;
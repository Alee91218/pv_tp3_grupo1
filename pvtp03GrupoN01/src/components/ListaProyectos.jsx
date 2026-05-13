import { useState } from "react";
import proyectService from "../services/proyectoService.js";

const ListaProyectos = () => {
    // estado para el campo de nuevo proyecto
  const [proyectoDelFormulario, setproyectoDelFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: true,
  });
  // estado iniciial
  const [proyectos, setProyectos] = useState(proyectService.obtenerProyectos());
  
  //funcion manejar cambio
  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    setproyectoDelFormulario({
      ...proyectoDelFormulario,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  //función manejar envió
  const manejarEnvio = (e) => {
    e.preventDefault();

    proyectService.agregarProyecto(proyectoDelFormulario);
    setProyectos(proyectService.obtenerProyectos());
    alert(`Proyecto: ${proyectoDelFormulario.titulo} guardado con exito`);
    setproyectoDelFormulario({ titulo: "", categoria: "", estado: false });
  };

  //eliminar proyecto
  const manejarEliminar = (id) => {
    proyectService.eliminarProyecto(id);
    setProyectos(proyectService.obtenerProyectos()); // actualiza la list
  };

  // buscar proyecto
  const manejarBuscar = (e) => {
    const texto = e.target.value;
    if (texto === "") {
      setProyectos(proyectService.obtenerProyectos());
    } else {
      setProyectos(proyectService.buscarProyecto(texto));
    }
  };
  return (
    <section>
      {/* agregar nuevo Proyeto*/}
      <h3>Registro de Proyecto</h3>
      <form onSubmit={manejarEnvio} >
        <div>
            <label>Titulo: </label>
            <input 
                type="text"
                name="titulo"
                value={proyectoDelFormulario.titulo}
                onChange={manejarCambio}
                required
            />
        </div>
        <br/>
        <div>
            <label>Categoria: </label>
            <input 
                type="text"
                name="categoria"
                value={proyectoDelFormulario.categoria}
                onChange={manejarCambio}
                required
            />
        </div>
        <br/>
        <div>
            <label>
            <input 
                type="checkbox"
                name="estado"
                checked={proyectoDelFormulario.estado}
                onChange={manejarCambio}
            /> En curso
            </label>
        </div>
        <br/>
        <button type="submit">Guardar Proyecto </button>
      </form>
      <h2>Listado de Proyectos</h2>
      {/* buscador */}
      <input
        type="text"
        placeholder="Buscar proyecto"
        onChange={manejarBuscar}
      />
      {/* lista dinamicaa */}
      <div className="proyectos-container">
        {proyectos.map((proyecto) => (
          <article key={proyecto.id}>
            <h3>{proyecto.titulo}</h3>
            <p>
              <strong>Categoria:</strong> {proyecto.categoria}
            </p>
            <p>
              <strong>Estado:</strong>{" "}
              {proyecto.estado ? "En Curso" : "Completado"}
            </p>
            {/* boton de eliminar */}
            <button onClick={() => manejarEliminar(proyecto.id)}>
              Eliminar
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};
export default ListaProyectos;

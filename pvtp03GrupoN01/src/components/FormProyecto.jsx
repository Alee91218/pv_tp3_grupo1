import { useState } from "react";

const FormProyecto = ({ agregarProyecto }) => {
  const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
    descripcion: "",
    pdf: "",
    drive: "",
    github: "",
    integrante1: "",
    rol1: "",
    integrante2: "",
    rol2: "",
    estado: false,
  });

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;

    setFormulario({
      ...formulario,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    agregarProyecto(formulario);

    setFormulario({
      titulo: "",
      categoria: "",
      descripcion: "",
      pdf: "",
      drive: "",
      github: "",
      integrante1: "",
      rol1: "",
      integrante2: "",
      rol2: "",
      estado: false,
    });
  };

  return (
    <form className="form-proyecto" onSubmit={manejarEnvio}>
      <h2>Agregar Proyecto</h2>

      <input
        type="text"
        name="titulo"
        placeholder="Título del Proyecto"
        value={formulario.titulo}
        onChange={manejarCambio}
        required
      />

      <input
        type="text"
        name="categoria"
        placeholder="Categoría"
        value={formulario.categoria}
        onChange={manejarCambio}
        required
      />
      <input
        type="text"
        name="descripcion"
        placeholder="Descripción"
        value={formulario.descripcion}
        onChange={manejarCambio}
        required
      />
      <h2>Recursos Digitales</h2>
      <input
        type="text"
        name="pdf"
        placeholder="pdf:https://ejemplo.com/tareas.pdf"
        value={formulario.pdf}
        onChange={manejarCambio}
        required
      />
      <input
        type="text"
        name="drive"
        placeholder="drive:https://drive.google.com/"
        value={formulario.drive}
        onChange={manejarCambio}
        required
      />
      <input
        type="text"
        name="github"
        placeholder="github:https://github.com/,"
        value={formulario.github}
        onChange={manejarCambio}
        required
      />
      <h2>Equipo del Proyecto</h2>
      <input
        type="text"
        name="integrante1"
        placeholder="Nombre:"
        value={formulario.integrante1}
        onChange={manejarCambio}
        required
      />
      <input
        type="text"
        name="rol1"
        placeholder="Rol en el equipo:"
        value={formulario.rol1}
        onChange={manejarCambio}
        required
      />

      <input
        type="text"
        name="integrante2"
        placeholder="Nombre:"
        value={formulario.integrante2}
        onChange={manejarCambio}
      />
      <input
        type="text"
        name="rol2"
        placeholder="Rol en el equipo:"
        value={formulario.rol2}
        onChange={manejarCambio}
      />

      <label>
        <input
          type="checkbox"
          name="estado"
          checked={formulario.estado}
          onChange={manejarCambio}
        />
        En curso
      </label>

      <button type="submit">Guardar Proyecto</button>
    </form>
  );
};

export default FormProyecto;

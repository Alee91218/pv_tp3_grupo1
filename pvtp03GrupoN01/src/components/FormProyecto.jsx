import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
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
    <Form className="form-proyecto" onSubmit={manejarEnvio}>
      <h2>Agregar Proyecto</h2>

      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          name="titulo"
          placeholder="Título del Proyecto"
          value={formulario.titulo}
          onChange={manejarCambio}
          required
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          name="categoria"
          placeholder="Categoría"
          value={formulario.categoria}
          onChange={manejarCambio}
          required
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          as="textarea"
          name="descripcion"
          placeholder="Descripción"
          value={formulario.descripcion}
          onChange={manejarCambio}
          required
        />
      </InputGroup>

      <h2>Recursos Digitales</h2>

      <InputGroup className="mb-3">
        <InputGroup.Text id="addon-pdf">pdf:</InputGroup.Text>
        <Form.Control
          type="text"
          name="pdf"
          placeholder="pdf:https://ejemplo.com/tareas.pdf"
          value={formulario.pdf}
          onChange={manejarCambio}
          required
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="addon-drive">drive:</InputGroup.Text>
        <Form.Control
          type="text"
          name="drive"
          placeholder="https://drive.google.com/"
          value={formulario.drive}
          onChange={manejarCambio}
          aria-describedby="addon-drive"
          required
        />
      </InputGroup>
      
      <InputGroup className="mb-3">
        <InputGroup.Text id="addon-github">github:</InputGroup.Text>
        <Form.Control
          type="text"
          name="github"
          placeholder="https://github.com/"
          value={formulario.github}
          onChange={manejarCambio}
          aria-describedby="addon-github"
          required
        />
      </InputGroup>
      
      <h2>Equipo del Proyecto</h2>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          name="integrante1"
          placeholder="Nombre:"
          value={formulario.integrante1}
          onChange={manejarCambio}
          required
        />
      </InputGroup>
      
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          name="rol1"
          placeholder="Rol en el equipo:"
          value={formulario.rol1}
          onChange={manejarCambio}
          required
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          name="integrante2"
          placeholder="Nombre:"
          value={formulario.integrante2}
          onChange={manejarCambio}
        />
      </InputGroup>
      
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          name="rol2"
          placeholder="Rol en el equipo:"
          value={formulario.rol2}
          onChange={manejarCambio}
        />
      </InputGroup>

      <Form.Group className="mb-3">
        <Form.Check 
          type="switch"
          id="estado-switch"
          name="estado"
          label="En curso"
          checked={formulario.estado}
          onChange={manejarCambio}
        />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Guardar Proyecto
      </Button>
    </Form>
  );
};

export default FormProyecto;

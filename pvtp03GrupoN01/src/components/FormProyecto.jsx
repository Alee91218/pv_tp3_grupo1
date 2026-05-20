import { useState } from "react";

const FormProyecto = ({ agregarProyecto }) => {

    const [formulario, setFormulario] = useState({
        titulo: "",
        categoria: "",
        estado: false
    });

    const manejarCambio = (e) => {

        const { name, value, type, checked } = e.target;

        setFormulario({
            ...formulario,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const manejarEnvio = (e) => {

        e.preventDefault();

        agregarProyecto(formulario);

        setFormulario({
            titulo: "",
            categoria: "",
            estado: false
        });
    };

    return (

        <form className="form-proyecto" onSubmit={manejarEnvio}>

            <h2>Agregar Proyecto</h2>

            <input
                type="text"
                name="titulo"
                placeholder="Título"
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

            <label>

                <input
                    type="checkbox"
                    name="estado"
                    checked={formulario.estado}
                    onChange={manejarCambio}
                />

                En curso

            </label>

            <button type="submit">
                Guardar Proyecto
            </button>

        </form>
    );
};

export default FormProyecto;

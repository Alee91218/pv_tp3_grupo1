const DetalleProyecto = ({ proyecto, cerrar }) => { //recibe el proyecto y una funcion para cerrar el detalle

    if (!proyecto) {
        return null;
    }

    const {
        titulo,
        descripcion,
        recursos,
        equipo
    } = proyecto;

    return (
        <section className="detalle-proyecto">

            <h2>{titulo}</h2>

            {descripcion.map((parrafo, index) => (
                <p key={index}>{parrafo}</p>
            ))}

            <h3>Recursos</h3>

            <ul>
                <li>
                    <a href={recursos.pdf}>PDF</a>
                </li>

                <li>
                    <a href={recursos.drive}>Drive</a>
                </li>

                <li>
                    <a href={recursos.github}>GitHub</a>
                </li>
            </ul>

            <h3>Equipo</h3>

            <ul>
                {equipo.map((miembro, index) => (
                    <li key={index}>
                        {miembro.nombre} - {miembro.rol}
                    </li>
                ))}
            </ul>

            <button onClick={cerrar}>
                Cerrar
            </button>

        </section>
    );
};

export default DetalleProyecto;
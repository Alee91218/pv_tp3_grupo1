import React from 'react';

const Dashboard = ({ proyectos = [] }) => {
  // Calcula el total dinámicamente
  const totalProyectos = proyectos.length;

  // FILTRADO BOOLEANO: Contamos los proyectos donde 'estado' sea exactamente true
  const proyectosEnCurso = proyectos.filter(
    (proyecto) => proyecto.estado === true
  ).length;

  return (
    <main className="container mt-5">
      <header>
        <h3 className="mb-3">Bienvenido al sistema de gestión de proyectos.</h3>
      </header>

      <section className="row">
        {/* Tarjeta 1 */}
        <article className="col-md-6 mb-4">
          <section className="card shadow">
            <article className="card-body">
              <h4 className="card-title">Total de proyectos</h4>
              <h2 className="text-primary">{totalProyectos}</h2>
            </article>
          </section>
        </article>

        {/* Tarjeta 2 */}
        <article className="col-md-6 mb-4">
          <section className="card shadow">
            <article className="card-body">
              <h5 className="card-title">Proyectos en curso</h5>
              <h2 className="text-success">{proyectosEnCurso}</h2>
            </article>
          </section>
        </article>
      </section>
    </main>
  );
};

export default Dashboard;
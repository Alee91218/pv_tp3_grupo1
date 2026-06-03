function Dashboard() {
  return (
    <div className="container mt-5">
      <h3 className="mb-3">Bienvenido al sistema de gestión de proyectos.</h3>


      <div className="row">
        {/* Tarjeta 1 */}
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="card-title">
                Total de proyectos
              </h4>

              <h2 className="text-primary">
                5
              </h2>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">
                Proyectos en curso
              </h5>

              <h2 className="text-success">
                2
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
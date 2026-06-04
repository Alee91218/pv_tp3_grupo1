import Alert from "react-bootstrap/Alert";

const RegistroActividad = ({ ultimaActualizacion }) => {
  return (
    <Alert variant="primary" className="mt-4 text-center">
      Última modificación del listado: {ultimaActualizacion}
    </Alert>
  );
};

export default RegistroActividad;
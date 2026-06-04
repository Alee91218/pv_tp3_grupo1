import { Card, Button, CardBody } from "react-bootstrap";

const CardProject = ({ proyecto, verDetalle, eliminarProyecto }) => {
  const { id, titulo, categoria, estado } = proyecto;
  return (
    <Card className="tarjeta">
      <CardBody className="d-flex flex-column align-items-center w-100 h-100">
        <Card.Title as="h3" className="mb-3">{titulo}</Card.Title>
        
        <Card.Text className="mb-2">
          <strong>Categoría:</strong> {categoria}
        </Card.Text>

        <Card.Text className="mb-4">
          <strong>Estado:</strong> {estado ? "En curso" : "Terminado"}
        </Card.Text>
        
        <div className="d-flex flex-column gap-3 mt-auto w-100">
            <Button variant="outline-info"
                    onClick={() => eliminarProyecto(id)}
            >
                Eliminar
            </Button>
        
            <Button
                variant="primary"
                className="boton-accion"
                onClick={() => verDetalle(proyecto)}
            >
                Ver Detalle
            </Button>
        </div>
        
      </CardBody>
    </Card>
  );
};

export default CardProject;

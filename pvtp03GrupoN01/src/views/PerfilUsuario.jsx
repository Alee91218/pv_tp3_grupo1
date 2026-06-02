import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const PerfilUsuario = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card
            style={{
                backgroundColor: "#013a63",
                color: "#eaf6fb",
                border: "1px solid rgba(255,255,255,0.08)"
            }}
          >
            <Card.Header>
              <h2 className="text-white m-0">
                Perfil de Usuario</h2>
            </Card.Header>

            <Card.Body>
              <p>
                <strong>Nombre:</strong> Alejandro Fernandez
              </p>

              <p>
                <strong>Rol:</strong> Estudiante
              </p>

              <p>
                <strong>Institución:</strong> Facultad de Ingeniería
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PerfilUsuario;
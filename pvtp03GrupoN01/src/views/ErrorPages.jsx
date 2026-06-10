import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const ErrorPage = () => {
   
    return (
    <>
        <Container className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
            <h1 className="display-1 text-danger fw-bold">¡Ups!</h1>
            <h2 className="mb-4">Lo sentimos, ha ocurrido un error inesperado.</h2>
            <p className="lead text-muted mb-4">
               Lo sentimos, la ruta a la que intentas acceder no existe o fue movida.
            </p>
            <Button variant="primary" as={Link} to="/Dashboard">
                Volver al Inicio
            </Button>
        </Container>        
    </>
    )
};

export default ErrorPage;
import { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// cambio Leandro: se importa el contexto de autorizaciones para los datos globales
import { AutorizacionesContext } from '../context/UsuarioContext';

const PerfilUsuario = () => {
  // cambio Leandro: consumimos el usuario activo y la funcion para actualizar la sesion
  const { usuarioActivo, guardarSesion } = useContext(AutorizacionesContext);

  // Estados locales para controlar la edición y el formulario
  const [editando, setEditando] = useState(false);
  const [nombre, setNombre] = useState(usuarioActivo?.nombre || 'Alejandro Fernandez');
  const [apellido, setApellido] = useState(usuarioActivo?.apellido || '');
  const [rol, setRol] = useState(usuarioActivo?.rol || 'Estudiante');
  const [institucion, setInstitucion] = useState(usuarioActivo?.institucion || 'Facultad de Ingeniería');

  // cambio Leandro: funcion actualizarPerfil que impacta inmediatamente en el contexto global
  const actualizarPerfil = (e) => {
    e.preventDefault();
    const usuarioActualizado = { ...usuarioActivo, nombre, apellido, rol, institucion };
    guardarSesion(usuarioActualizado);
    setEditando(false);
  };

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
              <h2 className="text-white m-0">Perfil de Usuario</h2>
            </Card.Header>

            <Card.Body>
              <Form onSubmit={actualizarPerfil}>
                <Form.Group className="mb-3">
                  <Form.Label><strong>Nombre:</strong></Form.Label>
                  <Form.Control 
                    type="text" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                    disabled={!editando}
                    style={!editando ? { backgroundColor: 'transparent', color: '#eaf6fb', border: 'none', paddingLeft: 0 } : {}}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label><strong>Apellido:</strong></Form.Label>
                  <Form.Control
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    disabled={!editando}
                    style={
                      !editando
                        ? {
                            backgroundColor: 'transparent',
                            color: '#eaf6fb',
                            border: 'none',
                            paddingLeft: 0
                          }
                        : {}
                    }
                  />
                </Form.Group>   

                <Form.Group className="mb-3">
                  <Form.Label><strong>DNI:</strong></Form.Label>
                  <Form.Control
                    type="text"
                    value={usuarioActivo?.dni || ''}
                    disabled
                    style={{
                      backgroundColor: 'transparent',
                      color: '#eaf6fb',
                      border: 'none',
                      paddingLeft: 0
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label><strong>Rol:</strong></Form.Label>
                  <Form.Control 
                    type="text" 
                    value={rol} 
                    onChange={(e) => setRol(e.target.value)} 
                    disabled={!editando}
                    style={!editando ? { backgroundColor: 'transparent', color: '#eaf6fb', border: 'none', paddingLeft: 0 } : {}}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label><strong>Institución:</strong></Form.Label>
                  <Form.Control 
                    type="text" 
                    value={institucion} 
                    onChange={(e) => setInstitucion(e.target.value)} 
                    disabled={!editando}
                    style={!editando ? { backgroundColor: 'transparent', color: '#eaf6fb', border: 'none', paddingLeft: 0 } : {}}
                  />
                </Form.Group>

                {/* cambio Leandro: boton interactivo que cambia segun el estado de edicion */}
                {!editando ? (
                  <Button variant="light" onClick={() => setEditando(true)}>
                    Editar Perfil
                  </Button>
                ) : (
                  <div className="d-flex gap-2">
                    <Button variant="success" type="submit">
                      Guardar Cambios
                    </Button>
                    <Button variant="secondary" onClick={() => setEditando(false)}>
                      Cancelar
                    </Button>
                  </div>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PerfilUsuario;
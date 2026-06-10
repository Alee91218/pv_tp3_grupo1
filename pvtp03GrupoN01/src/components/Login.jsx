import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAutorizaciones } from '../hook/useAutorizaciones'; 
import autorizacionesService from "../Services/autorizacionesService";

const Login = () => {
    const [form, setForm] = useState({ user: '', password: '' });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    // Para el manejo de validaciones visuales de campos con Bootstrap
    const [erroresCampo, setErroresCampo] = useState({});

    // Consumimos guardarSesion del contexto de tu grupo
    const { guardarSesion } = useAutorizaciones();
    const navigate = useNavigate();

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));

        // Limpia el estado de error del campo individual en tiempo real mientras escribís
        if (erroresCampo[name]) {
             setErroresCampo(prev => ({ ...prev, [name]: null }));
        }
    };

    const validarForm = ({ user, password }) => {
        const errores = {};

        if (!user.trim()) {
            errores.user = 'El email es obligatorio';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user)) {
            errores.user = 'El email no tiene un formato válido';
        }

        if (!password.trim()) {
            errores.password = 'La contraseña es obligatoria';
        } else if (password.length < 5) { 
            // Adaptado para aceptar las claves '12345' de tus usuarios de prueba
            errores.password = 'La contraseña debe tener al menos 5 caracteres';
        }

        return errores;
    };
    
    const manejarEnvio = async (e) => {
        e.preventDefault();
        setError(null);
        
        const errores = validarForm(form);
        if (Object.keys(errores).length > 0) {
             setErroresCampo(errores);
             return; 
        }

        setLoading(true);
        try {
            // 1. Llamamos a la promesa de tu servicio simulado (tarda 800ms)
            const respuestaBackend = await autorizacionesService.login(form.user, form.password);
            
            // 2. Armamos el objeto con la estructura que exige la cátedra (nombre, dni, rol, institucion)
            const usuarioParaContexto = {
                nombre: respuestaBackend.nombre, // Toma 'Facundo', 'Alejandro', etc.
                dni: "40123456", 
                rol: "Alumno", 
                institucion: "Facultad de Ingeniería - UNJU" 
            };

            // 3. Guardamos en el estado global (usuarioActivo) llamando a la función del contexto
            guardarSesion(usuarioParaContexto);
            
            // 4. Redirigimos al Dashboard del proyecto
            navigate('/dashboard');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const formularioIncompleto = !form.user.trim() || !form.password.trim();

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '75vh' }}>
            <div className="card p-4 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-4 text-primary">Iniciar Sesión</h2>
                
                <form onSubmit={manejarEnvio} noValidate>
                    {/* Campo Email */}
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Correo Electrónico</label>
                        <input
                            type="email"
                            name="user"
                            className={`form-control ${erroresCampo.user ? 'is-invalid' : ''}`}
                            value={form.user}
                            onChange={manejarCambio}
                            placeholder="nombre@gmail.com"
                        />
                        {erroresCampo.user && (
                            <div className="invalid-feedback">
                                {erroresCampo.user}
                            </div>
                        )}
                    </div>

                    {/* Campo Contraseña */}
                    <div className="mb-4">
                        <label className="form-label fw-semibold">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            className={`form-control ${erroresCampo.password ? 'is-invalid' : ''}`}
                            value={form.password}
                            onChange={manejarCambio}                      
                            placeholder="••••••"
                        />
                        {erroresCampo.password && (
                            <div className="invalid-feedback">
                                {erroresCampo.password}
                            </div>
                        )}
                    </div>

                    {/* Alerta de error (Credenciales Incorrectas) */}
                    {error && (
                        <div className="alert alert-danger text-center py-2 fw-medium" role="alert" style={{ fontSize: '0.9rem' }}>
                            {error}
                        </div>
                    )}
                    
                    {/* Botón de Ingreso con Spinner de Bootstrap */}
                    <button 
                        type="submit" 
                        className="btn btn-primary w-100 fw-bold py-2"
                        disabled={loading || formularioIncompleto}
                    >
                        {loading ? (
                            <div className="d-flex justify-content-center align-items-center">
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                <span>Verificando...</span>
                            </div>
                        ) : (
                            'Ingresar'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
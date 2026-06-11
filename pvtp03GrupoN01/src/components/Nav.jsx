import { NavLink, useNavigate } from 'react-router-dom';
// 1. IMPORTANTE: Importamos el hook del contexto
import { useAutorizaciones } from '../hook/useAutorizaciones'; 

const Nav = () => {
  // 2. Consumimos el usuario activo y la función de cerrar sesión
  const { usuarioActivo, cerrarSesion } = useAutorizaciones();
  const navigate = useNavigate();

  const manejarLogout = () => {
    cerrarSesion();
    navigate('/login'); // Al cerrar sesión, lo mandamos de vuelta al Login
  };

  return (
    <nav className="nav-container d-flex align-items-center justify-content-between w-100 px-3">
      <ul className="nav-list d-flex align-items-center mb-0 list-unstyled">
        <li>
          <NavLink to="/dashboard" className="me-3 text-decoration-none"> 
            Inicio
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/proyectos" className="me-3 text-decoration-none"> 
            Proyectos
          </NavLink>
        </li>

        <li>
          <NavLink to="/perfil" className="me-3 text-decoration-none"> 
            Perfil
          </NavLink>
        </li>
      </ul>

      {/* 3. LÓGICA DINÁMICA: Si hay un usuario, mostramos su nombre y el botón de salir con Bootstrap */}
      <div className="nav-user-info d-flex align-items-center gap-3">
        {usuarioActivo ? (
          <>
            <span className="fw-semibold text-light" style={{ fontSize: '0.95rem' }}>
              👤 {usuarioActivo.nombre} ({usuarioActivo.rol})
            </span>
            <button 
              className="btn btn-outline-danger btn-sm fw-bold"
              onClick={manejarLogout}
            >
              Salir
            </button>
          </>
        ) : (
          /* Si no inició sesión, le damos la opción de ir a tu pantalla */
          <NavLink to="/login" className="btn btn-primary btn-sm fw-bold">
            Iniciar Sesión
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;
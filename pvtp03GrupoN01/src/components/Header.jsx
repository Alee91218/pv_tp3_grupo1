import React, { useContext } from 'react';
import Nav from './Nav'; 
// cambio Leandro: importamos el contexto para sincronizar el nombre en tiempo real
import { AutorizacionesContext } from '../context/UsuarioContext';

const Header = () => {
  // cambio Leandro: leemos el usuario activo del contexto global
  const { usuarioActivo } = useContext(AutorizacionesContext);

  return (
    <header className="header-tp">
      <div className="header-logo">
        <h1>Gestión de Proyectos Educativos</h1>
        {/* cambio Leandro: muestra el nombre sincronizado si el usuario inicio sesion o modifico su perfil */}
        {usuarioActivo && (
          <span style={{ color: '#eaf6fb', marginLeft: '20px', fontSize: '1.1rem' }}>
            Usuario: <strong>{usuarioActivo.nombre}</strong>
          </span>
        )}
      </div>
      {/* Llamamos al componente Nav aquí */}
      <Nav />
    </header>
  );
};

export default Header;
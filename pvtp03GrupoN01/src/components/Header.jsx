import React from 'react';
import Nav from './Nav'; // Importamos el componente que acabas de crear

const Header = () => {
  return (
    <header className="header-tp">
      <div className="header-logo">
        <h1>Gestión de Proyectos Educativos</h1>
      </div>
      {/* Llamamos al componente Nav aquí */}
      <Nav />
    </header>
  );
};

export default Header;
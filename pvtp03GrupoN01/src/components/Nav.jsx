import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li>
          <NavLink to="/dashboard"> 
            Inicio
          </NavLink>
        </li>
        
         <li>
          <NavLink to="/proyectos"> 
            Proyectos
          </NavLink>
        </li>

         <li>
          <NavLink to="/perfil"> 
            Perfil
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
import React, { useState } from 'react';
import Header from './components/Header' 
import Footer from './components/Footer' 
import Proyectos from './components/Proyecto'
import { Routes, Route, Navigate } from "react-router-dom";
import PerfilUsuario from './views/PerfilUsuario';
import Dashboard from './views/Dashboard';
import DetalleProyecto from './components/DetalleProyecto'; 
import RutaProtegida from './components/RutasProtegidas';
import ErrorPage from '../src/views/ErrorPages';

import Login from './components/Login'; 
import { ProveedorAutorizaciones } from './context/UsuarioContext';
import proyectService from './services/proyectoService.js'; 

const App = () => {
  // Estado global para mantener los proyectos sincronizados en toda la app
  const [listaProyectos, setListaProyectos] = useState(proyectService.obtenerProyectos());

  return (
    <ProveedorAutorizaciones>
    <Header />
    <main>  
      <Routes>
        <Route
         path="/"
         element={<Navigate to="/login" />}
        />

        <Route 
          path="/login"
          element={<Login />}
        />

        <Route 
          path="/dashboard"
          element={
            <RutaProtegida>
              <Dashboard proyectos={listaProyectos} />
            </RutaProtegida>
          }
        />
        
        <Route 
          path="/perfil"
          element={ 
            <RutaProtegida>
              <PerfilUsuario/>
            </RutaProtegida>
          }
        />

         <Route 
          path="/proyectos"
          element={
            <RutaProtegida>
              <Proyectos proyectos={listaProyectos} setProyectos={setListaProyectos} />
            </RutaProtegida>
          }
        />

        <Route 
          path="/proyectos/:id"
          element={
            <RutaProtegida>
              <DetalleProyecto />
            </RutaProtegida>
          }
        />

        <Route 
          path="*" 
          element={<ErrorPage />} 
        />
      </Routes>
    </main>
    <Footer />
    </ProveedorAutorizaciones>
  )
}

export default App;
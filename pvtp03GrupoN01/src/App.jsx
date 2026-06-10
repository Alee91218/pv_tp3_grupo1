import Header from './components/Header' 
import Footer from './components/Footer' 
import Proyectos from './components/Proyecto'
import { Routes, Route, Navigate } from "react-router-dom";
import PerfilUsuario from './views/PerfilUsuario';
import Dashboard from './views/Dashboard';
import DetalleProyecto from './components/DetalleProyecto'; // CAMBIO LEANDRO: Importación de tu sección independiente
import RutaProtegida from './components/RutasProtegidas';
import ErrorPage from '../src/views/ErrorPages'

function App() {
  return (
    <>
    <Header />
    <main>  
      <Routes>
        <Route
         path="/"
         element={<Navigate to="/dashboard" />}
        />

        <Route 
          path="/dashboard"
          element={<Dashboard/>}
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
          element={<Proyectos />}
        />

        {/* CAMBIO LEANDRO: Nueva ruta dinámica independiente vinculada a /proyectos/:id */}
        <Route 
          path="/proyectos/:id"
          element={<DetalleProyecto />}
        />

        <Route 
          path="*" 
          element={<ErrorPage />} 
        />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
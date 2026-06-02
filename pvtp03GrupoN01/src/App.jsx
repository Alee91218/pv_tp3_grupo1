import Header from './components/Header' 
import Footer from './components/Footer' 
import Proyectos from './components/Proyecto'
import { Routes, Route } from "react-router-dom";
import PerfilUsuario from './views/PerfilUsuario';

function App() {
  return (
    <>
    <Header />
    <main>  
      <Routes>
        <Route 
          path="/dashboard"
          element={<h1> dashboard en construccion </h1>}
        />

         <Route 
          path="/perfil"
          element={ <PerfilUsuario/> }
        />

         <Route 
          path="/proyectos"
          element={<Proyectos />}
        />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
import { Navigate } from "react-router-dom";
import { useAutorizaciones } from '--/hook/useAutorizaciones';

const RutaProtegida = ({ children }) => {
    const { usuarioActivo } = useAutorizaciones();

    if (!usuarioActivo) {
        return <Navigate to="/" replace />; 
    }

    return children;
};

export default RutaProtegida;
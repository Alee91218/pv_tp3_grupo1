import { createContext, useContext, useState } from 'react';

// 1 null no hay nada fuera del contexto
export const AutorizacionesContext = createContext(null);

// 2
export const ProveedorAutorizaciones = ({ children }) => {

    const [usuarioActivo, setUsuarioActivo] = useState(null);

    const guardarSesion = (usuario) => setUsuarioActivo(usuario);
    const cerrarSesion  = () => setUsuarioActivo(null);

    return (
        <AutorizacionesContext.Provider value={{ usuarioActivo, guardarSesion, cerrarSesion }}>
            {children}
        </AutorizacionesContext.Provider>
    );
};
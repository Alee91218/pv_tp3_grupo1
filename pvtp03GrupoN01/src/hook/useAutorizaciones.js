import { AutorizacionesContext } from '../context/UsuarioContext';
import { useContext } from 'react';

// custom hook para consumir el contexto
export const useAutorizaciones = () => useContext(AutorizacionesContext);
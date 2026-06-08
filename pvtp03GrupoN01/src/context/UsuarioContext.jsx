const logout = () => {
    setUsuarioActivo(null);
    localStorage.removeItem('usuario');
    };
    
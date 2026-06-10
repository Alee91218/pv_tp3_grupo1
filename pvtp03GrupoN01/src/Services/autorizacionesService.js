const autorizacionesService = ( () => {

    //simulamos la base de datos
    const usuarios = [
            {id: 1, nombre: 'Facundo', apellido: 'Matorraz', user: 'FacuMtz912@gmail.com', password: '12345'  },
            {id: 2, nombre: 'Alejandro', apellido: 'Fernandez', user: 'AleeFer@gmail.com', password: '654321' },
            {id: 3, nombre: 'Leandro', apellido: 'Barea', user: 'LeaBar@gmail.com', password: '78910'  },
            {id: 4, nombre: 'Jhonatan', apellido: 'Chaile', user: 'Jimmy@gmail.com', password: 'H1234'  },
            {id: 5, nombre: 'Franco', apellido: 'Ponce', user: 'FranPc@gmail.com', password: '12345'  } 
    ]
    const login = (user, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const encontrado = usuarios.find (
                    u => u.user === user && u.password === password
                );
                if (encontrado) {
                    resolve ({id: encontrado.id, nombre: encontrado.nombre});
                } else {
                    reject (new Error ('Usuario o Contraseña incorrectos'))
                }
            }, 800);
        });
    };
    return { login };
})();

export default autorizacionesService;
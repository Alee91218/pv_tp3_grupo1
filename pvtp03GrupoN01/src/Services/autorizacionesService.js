const autorizacionesService = ( () => {

    //simulamos la base de datos
    const usuarios = [
            {id: 1, nombre: 'Facundo', apellido: 'Matorraz', user: 'FacuMtz912@gmail.com', password: '12345' , dni:'40123456', rol:'Alumno', institucion:'Facultad de Ingieneria - UNJU' },
            {id: 2, nombre: 'Alejandro', apellido: 'Fernandez', user: 'AleeFer@gmail.com', password: '654321', dni:'41123456', rol:'Alumno', institucion:'Facultad de Ingieneria - UNJU' },
            {id: 3, nombre: 'Leandro', apellido: 'Barea', user: 'LeaBar@gmail.com', password: '78910' , dni:'42123456', rol:'Alumno', institucion:'Facultad de Ingieneria - UNJU'  },
            {id: 4, nombre: 'Jonatan', apellido: 'Chaile', user: 'Jimmy@gmail.com', password: 'H1234' , dni:'43123456', rol:'Alumno', institucion:'Facultad de Ingieneria - UNJU' },
            {id: 5, nombre: 'Franco', apellido: 'Ponce', user: 'FranPc@gmail.com', password: '12345' , dni:'44123456', rol:'Alumno', institucion:'Facultad de Ingieneria - UNJU' } 
    ]
    const login = (user, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const encontrado = usuarios.find (
                    u => u.user === user && u.password === password
                );
                if (encontrado) {
                    resolve ({id: encontrado.id, nombre: encontrado.nombre, apellido: encontrado.apellido, dni: encontrado.dni, rol: encontrado.rol, institucion: encontrado.institucion });
                } else {
                    reject (new Error ('Usuario o Contraseña incorrectos'))
                }
            }, 800);
        });
    };
    return { login };
})();

export default autorizacionesService;
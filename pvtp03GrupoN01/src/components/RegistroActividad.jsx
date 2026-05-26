import React from 'react';

const RegistroActividad = ({ ultimaActualizacion }) => {
  return (
    <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px', textAlign: 'center' }}>
      <p style={{ margin: 0, color: '#555', fontWeight: 'bold' }}>
        Última modificación del listado: {ultimaActualizacion}
      </p>
    </div>
  );
};

export default RegistroActividad;
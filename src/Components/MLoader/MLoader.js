import React from 'react';
import { Box } from '@mui/material';
import { CircularProgress } from '@mui/material'; // Si deseas agregar también una animación de carga
// No es necesario importar el ícono desde public, solo usar la ruta directa
const MLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff', // Puedes modificar el fondo
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <img
          src="/img/laptop-svgrepo-com.svg" // Ruta directa a la carpeta public
          alt="Loading..."
          style={{
            width: '150px', // Tamaño del ícono (puedes ajustarlo)
            height: 'auto',
            animation: 'spin 1.5s linear infinite', // Puedes agregar animación si lo deseas
          }}
        />
        <CircularProgress sx={{ marginTop: 2 }} /> {/* Si deseas añadir un círculo de carga debajo */}
      </Box>
    </Box>
  );
};

export default MLoader;

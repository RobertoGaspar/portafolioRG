import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import backgroundImage from '../../img/Wallpaper_principal.jpg'; 

function MHeader() {
    return  (
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          backgroundImage:`url(${backgroundImage})`, // Imagen confiable
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundRepeat: 'no-repeat',
          margin: 0, // Elimina márgenes
          padding: 0, // Elimina rellenos
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: 4,
            padding: { xs: 2, sm: 4 }, // Adaptación responsiva en padding
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            maxWidth: { xs: '90%', sm: '80%', md: '60%' }, // Adaptación del tamaño del contenedor
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" sx={{ color: '#fff', fontWeight: 'bold', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
          ¡Hola, mundo! soy Roberto Antonio Gaspar Reza.
          </Typography>
          <Typography variant="h6" sx={{ color: '#fff', mt: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
          Desarrollador de aplicaciones Web y servicios RestFull. 
          </Typography>
        </Box>
      </Box>
    );
}

export default MHeader;
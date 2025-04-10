import React, { useState } from 'react';
import {  Button, Grid, Typography, Box } from '@mui/material';
import perfilImage from '../../img/Perfil.jpg'; 

function Aboutme() {
  const handleOpenPDF = () => {
    window.open('/pdf/cv.pdf', '_blank');
  };



    return ( 
      <Grid container spacing={2} sx={{
        justifyContent: "space-around",
        alignItems: "center",
      }}  >
        <Grid item xs={12} sm={6} md={4}>
          <h1>Sobre mí...</h1>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'justify',
              fontSize: '1.2rem', // o '20px'
              maxWidth: '600px',
              margin: '0 auto',
              color: 'text.primary'
            }}
          >
          Ingeniero en sistemas con más de 4 años de experiencia especializado en el desarrollo de  aplicaciones web, móviles y API REST.  
          <br/>
          <br/>  
          Destaco por mi enfoque eficiente y creativo para resolver desafíos complejos.
          <br/>
          <br/>
          Comprometido con  la actualización constante, busco contribuir a un entorno dinámico con innovación y excelencia  técnica. Mi objetivo es aplicar mi experiencia para impulsar el éxito del equipo y la organización.
         </Typography>
         <br/>
        <br/>
        <Button variant="contained" sx={{ color: "withe", backgroundColor: "black"}} onClick={handleOpenPDF}>
          ver mi CV
        </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Box
          component="img"
          src={perfilImage} // Cambia esto al path de tu imagen
          alt="Mi Foto"
          sx={{
            width: { xs: '100%', sm: '300px' },
            height: 'auto',
            borderRadius: '50%',
            boxShadow: 3,
            objectFit: 'cover',
          }}
        />
        </Grid>
      </Grid>
      );
}

export default Aboutme;
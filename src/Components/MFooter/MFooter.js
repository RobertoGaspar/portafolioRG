import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, LinkedIn, GitHub } from '@mui/icons-material'; // Importa los íconos que necesites

const MFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: 'white',
        padding: '2rem',
        marginTop: '2rem',
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {/* Información de contacto */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom align="center">
            Información de Contacto
          </Typography>
          <Typography align="center">
            <strong>Correo electrónico:</strong>{' '}
            <Link href="mailto:gasparrezaantonio@gmail.com" color="inherit">
              gasparrezaantonio@gmail.com
            </Link>
          </Typography>
          <Typography align="center">
            <strong>Teléfono:</strong> +52 777 653 4477
          </Typography>
        </Grid>

        {/* Redes sociales */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom align="center">
            Sígueme
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <IconButton
              component="a"
              href="https://www.facebook.com/profile.php?id=100009684003251"
              target="_blank"
              sx={{ color: 'white', margin: '0 10px' }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/rezarobeantonio/"
              target="_blank"
              sx={{ color: 'white', margin: '0 10px' }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/roberto-antonio-gaspar-reza-05094724a/"
              target="_blank"
              sx={{ color: 'white', margin: '0 10px' }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/RobertoGaspar"
              target="_blank"
              sx={{ color: 'white', margin: '0 10px' }}
            >
              <GitHub />
            </IconButton>
          </Box>
        </Grid>

        {/* Derechos de autor */}
        <Grid item xs={12} sm={4}>
          <Typography align="center" variant="body2" color="gray">
            &copy; {new Date().getFullYear()} Roberto Antonio Gaspar Reza. Todos los derechos reservados.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MFooter;
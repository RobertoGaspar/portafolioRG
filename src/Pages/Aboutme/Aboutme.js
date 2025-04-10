import React, { useRef } from 'react';
import { Button, Grid, Typography, Box } from '@mui/material';
import perfilImage from '../../img/Perfil.jpg';
import { motion, useInView } from 'framer-motion';

function Aboutme() {
  const handleOpenPDF = () => {
    window.open('/pdf/cv.pdf', '_blank');
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Grid
      ref={ref}
      container
      spacing={2}
      sx={{
        justifyContent: 'space-around',
        alignItems: 'center',
        px: { xs: 2, sm: 4, md: 8 }, // margen lateral en pantallas pequeñas
        py: 6,
      }}
    >
      {/* Texto */}
      <Grid item xs={12} sm={6} md={4}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1>Sobre mí...</h1>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'justify',
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto',
              color: 'text.primary',
            }}
          >
            Ingeniero en sistemas con más de 4 años de experiencia especializado en el desarrollo de aplicaciones web, móviles y API REST.
            <br />
            <br />
            Destaco por mi enfoque eficiente y creativo para resolver desafíos complejos.
            <br />
            <br />
            Comprometido con la actualización constante, busco contribuir a un entorno dinámico con innovación y excelencia técnica. Mi objetivo es aplicar mi experiencia para impulsar el éxito del equipo y la organización.
          </Typography>
          <br />
          <br />
          <Button variant="contained" sx={{ backgroundColor: 'black' }} onClick={handleOpenPDF}>
            Ver mi CV
          </Button>
        </motion.div>
      </Grid>

      {/* Imagen */}
      <Grid item xs={12} sm={6} md={4}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box
            component="img"
            src={perfilImage}
            alt="Mi Foto"
            sx={{
              width: { xs: '100%', sm: '300px' },
              height: 'auto',
              borderRadius: '50%',
              boxShadow: 3,
              objectFit: 'cover',
            }}
          />
        </motion.div>
      </Grid>
    </Grid>
  );
}

export default Aboutme;
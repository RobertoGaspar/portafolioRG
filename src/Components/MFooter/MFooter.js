import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, LinkedIn, GitHub } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Box
        sx={{
          backgroundColor: '#333',
          color: 'white',
          padding: '2rem', 
          pb: 6, // Espacio inferior
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {/* Información de contacto */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom align="center">
              Información de Contacto
            </Typography>
            <Typography align="center">
              <strong>Correo:</strong>{' '}
              <Link href="mailto:gasparrezaantonio@gmail.com" color="inherit">
                gasparrezaantonio@gmail.com
              </Link>
            </Typography>
            <Typography align="center" sx={{ mt: 1 }}>
              <strong>Teléfono:</strong> +52 777 653 4477
            </Typography>
          </Grid>

          {/* Redes sociales */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom align="center">
              Sígueme
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <IconButton
                component="a"
                href="https://www.facebook.com/profile.php?id=100009684003251"
                target="_blank"
                sx={{ color: 'white', mx: 1 }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/rezarobeantonio/"
                target="_blank"
                sx={{ color: 'white', mx: 1 }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/roberto-antonio-gaspar-reza-05094724a/"
                target="_blank"
                sx={{ color: 'white', mx: 1 }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/RobertoGaspar"
                target="_blank"
                sx={{ color: 'white', mx: 1 }}
              >
                <GitHub />
              </IconButton>
            </Box>
          </Grid>

          {/* Derechos de autor */}
          <Grid item xs={12}>
            <Typography align="center" variant="body2" color="gray" sx={{ mt: 4 }}>
              &copy; {new Date().getFullYear()} Roberto Antonio Gaspar Reza. Todos los derechos reservados.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default MFooter;

import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import backgroundImage from '../../img/Wallpaper_principal.jpg';

function MHeader() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        padding: 0,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: 4,
            padding: { xs: 2, sm: 4 },
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            maxWidth: { xs: '90%', sm: '80%', md: '60%' },
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              }}
            >
              ¡Hola, mundo! soy Roberto Antonio Gaspar Reza.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              sx={{
                color: '#fff',
                mt: 2,
                fontSize: { xs: '1rem', sm: '1.25rem' },
              }}
            >
              Desarrollador de aplicaciones Web y servicios RestFull.
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
}

export default MHeader;

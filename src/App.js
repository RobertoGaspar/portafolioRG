import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Nbar from './Components/Nbar/Nbar.js';
import MHeader from './Components/Mheader/MHeader.js';
import Aboutme from './Pages/Aboutme/Aboutme.js';
import Proyects from './Pages/Proyects/Proyects.js'; 
import MCaroussellSkills from './Components/MCaroussellSkills/MCaroussellSkills.js';
import MFooter from './Components/MFooter/MFooter.js';
import MLoader from './Components/MLoader/MLoader.js';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <MLoader />
      ) : (
        <Box sx={{ width: '100%', backgroundColor: '#eaeaea' }}>
          <Nbar />

          <Box id="home">
            <MHeader />
          </Box>

          {/* Contenedor con fondo blanco y bordes sutiles */}
          <Box
            sx={{
              backgroundColor: '#ffffff',
              mx: { xs: 0, md: '15%' },
              px: { xs: 2, sm: 3 },
              py: 4,
              borderLeft: { xs: 'none', md: '1px solid #ddd' },
              borderRight: { xs: 'none', md: '1px solid #ddd' },
            }}
          >
            <Box id="about" sx={{ my: 6 }}>
              <Aboutme />
            </Box>

            <Box id="skills" sx={{ my: 6 }}>
              <MCaroussellSkills />
            </Box>

            <Box id="proyect" sx={{ my: 6 }}>
              <Proyects />
            </Box>
          </Box>

          <Box id="contact">
            <MFooter id="contact" />
          </Box>
        </Box>
      )}
    </>
  );
}

export default App;

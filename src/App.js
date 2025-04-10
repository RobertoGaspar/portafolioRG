import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Nbar from './Components/Nbar/Nbar.js';
import MHeader from './Components/Mheader/MHeader.js';
import Aboutme from './Pages/Aboutme/Aboutme.js';
import Proyects from './Pages/Proyects/Proyects.js'; 
import MCaroussellSkills from './Components/MCaroussellSkills/MCaroussellSkills.js';
import MFooter from './Components/MFooter/MFooter.js';
import MLoader from './Components/MLoader/MLoader.js'; // Importamos el componente de pantalla de carga

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 segundos de carga
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <MLoader /> // Mostrar la animación de carga mientras se carga la página
      ) : (
        <Box sx={{ width: '100%' }}>
          <Nbar />

          <Box id="home">
            <MHeader />
          </Box>

          <Box id="about" sx={{ my: 6 }}>
            <Aboutme />
          </Box>

          <Box id="skills" sx={{ my: 6 }}>
            <MCaroussellSkills />
          </Box>

          <Box id="proyect" sx={{ my: 6 }}>
            <Proyects />
          </Box>

          <Box id="contact" sx={{ my: 6 }}></Box>

          <MFooter id="contact" />
        </Box>
      )}
    </>
  );
}

export default App;

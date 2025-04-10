import React from 'react';
import { Button, Typography } from '@mui/material';
import Nbar from './Components/Nbar/Nbar.js';
import MHeader from './Components/Mheader/MHeader.js';
import Aboutme from "./Pages/Aboutme/Aboutme.js";
import Proyects from "./Pages/Proyects/Proyects.js"; 

function App() {
  return (
    <div  >
      <Nbar />
      <div id="home"> 
      <MHeader></MHeader>
      </div>
      <div id="about">
      <Aboutme/>
      <Typography variant="h4" component="h1" gutterBottom>
        ¡Hola, Material UI!
      </Typography> 
      </div>
      <div id="proyect">
      <Proyects/>
      </div> 
      <div id="contact">

      <Button variant="contained" color="primary">
        ¡Haz clic aquí!
      </Button>
      </div>
    </div>
  );
}

export default App;

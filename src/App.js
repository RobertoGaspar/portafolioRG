import React from 'react';
import { Button, Typography } from '@mui/material';
import Nbar from './Components/Nbar/Nbar.js';
import MHeader from './Components/Mheader/MHeader.js';
import Aboutme from "./Pages/Aboutme/Aboutme.js";
import Proyects from "./Pages/Proyects/Proyects.js"; 
import MCaroussellSkills from './Components/MCaroussellSkills/MCaroussellSkills.js';
import MFooter from './Components/MFooter/MFooter.js';

function App() {
  return (
    <div  >
      <Nbar />
      <div id="home"> 
      <MHeader></MHeader>
      </div>
      <br/>
      <br/>
      <div id="about">
      <Aboutme/>
      <br/>
      <br/>
      <div>
        <MCaroussellSkills></MCaroussellSkills>
      </div>
      <br/>
      <br/>
      </div>
      <div id="proyect">
      <Proyects/>
      </div> 
      <div id="contact">

        <MFooter></MFooter>
      </div>
    </div>
  );
}

export default App;

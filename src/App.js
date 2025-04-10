import React from 'react';
import { Button, Typography } from '@mui/material';
import Nbar from './Components/Nbar.js';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Nbar />
      <Typography variant="h4" component="h1" gutterBottom>
        ¡Hola, Material UI!
      </Typography>
      <Button variant="contained" color="primary">
        ¡Haz clic aquí!
      </Button>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Chip, Grid, Box } from '@mui/material';
import { CircularProgress } from '@mui/material'; // Para la animación de carga

const MProyectCard = ({ projectName, description, techList, isUnderConstruction, demoLink, githubLink, imageSrc }) => {
  const [isDemoLoading, setIsDemoLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);

  const handleDemoClick = () => {
    if (demoLink && !isUnderConstruction) {
      setIsDemoLoading(true);
      setTimeout(() => {
        window.open(demoLink, '_blank');
        setIsDemoLoading(false);
      }, 1500); // Simula la carga por 1.5 segundos antes de abrir el demo
    }
  };

  const handleGithubClick = () => {
    setIsGithubLoading(true);
    setTimeout(() => {
      window.open(githubLink, '_blank');
      setIsGithubLoading(false);
    }, 1500); // Simula la carga por 1.5 segundos antes de abrir GitHub
  };

  return (
    <Card sx={{ width: '100%', maxWidth: 600, margin: '20px', borderRadius: '10px', boxShadow: 3 }} className="MProyectCard">
      {/* Imagen tomada desde la propiedad 'imageSrc' */}
      <img
        src={imageSrc} // Usamos la propiedad 'imageSrc' directamente
        alt={projectName}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
      />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          {projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', marginBottom: 2 }}>
          {techList.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              sx={{
                marginRight: 1,
                marginBottom: 1,
                backgroundColor: '#2196f3', // Azul para el fondo del chip
                color: 'white', // Color del texto
                '&:hover': {
                  transform: 'scale(1.1)', // Escala al poner el cursor sobre el chip
                  transition: 'transform 0.3s', // Tiempo de la animación de escala
                },
                cursor: 'pointer', // Cambia el cursor para indicar que es interactivo
              }}
            />
          ))}
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={isUnderConstruction || isDemoLoading} // Bloquea si está en construcción o si está cargando
              onClick={handleDemoClick}
              sx={{
                position: 'relative',
                '&:disabled': {
                  backgroundColor: 'gray',
                },
              }}
            >
              {isDemoLoading ? (
                <>
                  <CircularProgress size={24} sx={{ position: 'absolute', left: '50%', top: '50%', marginLeft: '-12px', marginTop: '-12px' }} />
                  Construyendo...
                </>
              ) : (
                isUnderConstruction ? 'En Construcción' : 'Demo' // Si está en construcción, muestra "En Construcción"
              )}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              disabled={isGithubLoading} // Bloquea solo si está cargando
              onClick={handleGithubClick}
              sx={{
                position: 'relative',
                '&:disabled': {
                  backgroundColor: 'gray',
                },
              }}
            >
              {isGithubLoading ? (
                <>
                  <CircularProgress size={24} sx={{ position: 'absolute', left: '50%', top: '50%', marginLeft: '-12px', marginTop: '-12px' }} />
                  Construyendo...
                </>
              ) : (
                'GitHub'
              )}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MProyectCard;

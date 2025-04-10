import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Chip, Grid, Box, CircularProgress } from '@mui/material';

const MProyectCard = ({ projectName, description, techList, isUnderConstruction, demoLink, githubLink, imageSrc }) => {
  const [isDemoLoading, setIsDemoLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);

  const handleDemoClick = () => {
    if (demoLink && !isUnderConstruction) {
      setIsDemoLoading(true);
      setTimeout(() => {
        window.open(demoLink, '_blank');
        setIsDemoLoading(false);
      }, 1500);
    }
  };

  const handleGithubClick = () => {
    setIsGithubLoading(true);
    setTimeout(() => {
      window.open(githubLink, '_blank');
      setIsGithubLoading(false);
    }, 1500);
  };

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: { xs: 300, sm: 400, md: 450 }, // Tamaños más pequeños para pantallas pequeñas
        margin: 'auto',
        my: 2, // Reduce el margen superior e inferior
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Box
        component="img"
        src={imageSrc}
        alt={projectName}
        sx={{
          width: '100%',
          height: { xs: 150, sm: 180 }, // Ajusta el tamaño de la imagen
          objectFit: 'cover',
          borderRadius: '10px 10px 0 0',
        }}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          {projectName}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {description}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 1 }}>
          {techList.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              sx={{
                mr: 1,
                mb: 1,
                backgroundColor: '#2196f3',
                color: 'white',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s',
                },
                cursor: 'pointer',
              }}
            />
          ))}
        </Box>

        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={isUnderConstruction || isDemoLoading}
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
                  <CircularProgress size={24} sx={{ position: 'absolute', left: '50%', top: '50%', ml: '-12px', mt: '-12px' }} />
                  Construyendo...
                </>
              ) : (
                isUnderConstruction ? 'En Construcción' : 'Demo'
              )}
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              disabled={isGithubLoading}
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
                  <CircularProgress size={24} sx={{ position: 'absolute', left: '50%', top: '50%', ml: '-12px', mt: '-12px' }} />
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

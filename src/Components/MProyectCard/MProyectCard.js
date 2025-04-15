import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Grid,
  Box,
  CircularProgress,
  Stack
} from '@mui/material';

const MProyectCard = ({
  projectName,
  description,
  techList,
  imageSrc,
  projectType,
  status,
  demoLink,
  githubLink
}) => {
  const [isDemoLoading, setIsDemoLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);

  const handleDemoClick = () => {
    if (demoLink) {
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

  const isDemoDisabled =
    isDemoLoading || (projectType === 'personal' && status !== 'Terminado');

  const isGithubDisabled = isGithubLoading || status === 'Construyendo Back';

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: { xs: 300, sm: 400, md: 450 },
        margin: 'auto',
        my: 2,
        borderRadius: 2,
        boxShadow: 2
      }}
    >
      <Box
        component="img"
        src={imageSrc}
        alt={projectName}
        sx={{
          width: '100%',
          height: { xs: 150, sm: 180 },
          objectFit: 'cover',
          borderRadius: '10px 10px 0 0'
        }}
      />
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {projectName}
          </Typography>
          <Chip
            label={projectType === 'personal' ? 'Personal' : 'Laboral'}
            size="small"
            color={projectType === 'personal' ? 'primary' : 'secondary'}
          />
        </Stack>

        {projectType === 'personal' && status && (
          <Chip
            label={status}
            size="small"
            sx={{
              backgroundColor:
                status === 'Construyendo Back'
                  ? '#ffa726'
                  : status === 'Construyendo Front'
                  ? '#29b6f6'
                  : '#66bb6a',
              color: 'white',
              mb: 1
            }}
          />
        )}

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
                  transition: 'transform 0.3s'
                },
                cursor: 'pointer'
              }}
            />
          ))}
        </Box>

        <Grid container spacing={1}>
          <Grid item xs={projectType === 'personal' ? 6 : 12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={isDemoDisabled}
              onClick={handleDemoClick}
              sx={{
                position: 'relative',
                '&:disabled': {
                  backgroundColor: 'gray'
                }
              }}
            >
              {isDemoLoading ? (
                <>
                  <CircularProgress
                    size={24}
                    sx={{ position: 'absolute', left: '50%', top: '50%', ml: '-12px', mt: '-12px' }}
                  />
                  Cargando...
                </>
              ) : (
                'Sitio Web'
              )}
            </Button>
          </Grid>

          {projectType === 'personal' && (
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                disabled={isGithubDisabled}
                onClick={handleGithubClick}
                sx={{
                  backgroundColor: '#000',
                  color: 'white',
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: '#333'
                  },
                  '&:disabled': {
                    backgroundColor: 'gray'
                  }
                }}
              >
                {isGithubLoading ? (
                  <>
                    <CircularProgress
                      size={24}
                      sx={{ position: 'absolute', left: '50%', top: '50%', ml: '-12px', mt: '-12px' }}
                    />
                    Cargando...
                  </>
                ) : (
                  'GitHub'
                )}
              </Button>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MProyectCard;

import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import MProyectCard from '../../Components/MProyectCard/MProyectCard';

function Proyects() {
  const projects = [
    {
      name: 'NeoSchool',
      description: 'Sistema encargado de llevar la gestión de los alumnos, sus materias y evaluaciones.',
      techList: ['Microservices', 'Java 11', 'Python', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'MongoDB'],
      imageSrc: '/img/Wallpaper_school.jpg',
      demoLink: '', // No tiene demo
      githubLink: 'https://github.com/RobertoGaspar/NeoSchool',
      projectType: 'personal',
      status: 'Construyendo Back' // Aplica solo a proyectos personales
    },
    
    {
      name: 'SCALD',
      description: 'Sistema encargado de llevar la gestión de los medicamentos, el envio de los mismos a los almacenes y la gestion de recetas.',
      techList: ['Java 8', 'Spring', 'JasperReport', 'PostgreSQL 14', 'Apache Poi'],
      imageSrc: '/img/Wallpaper_scald.jpg',
      demoLink: 'https://jalisco.scald.com.mx/auth/login',  
      projectType: 'laboral' 
    }
  ];

  return (
    <Box sx={{ marginBottom: 6, paddingLeft: { xs: '5%', sm: '10%', md: '20%' } }}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: 4 }}>
        Mis Proyectos
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MProyectCard
              projectName={project.name}
              description={project.description}
              techList={project.techList}
              imageSrc={project.imageSrc}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              projectType={project.projectType}
              status={project.status}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Proyects;

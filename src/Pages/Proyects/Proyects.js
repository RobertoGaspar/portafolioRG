import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Container } from '@mui/material';
import MProyectCard from '../../Components/MProyectCard/MProyectCard'; 


function Proyects() {
  const projects=[ {
    name: 'NeoSchool',
    description: 'Sistema encargado de llevar la gestion de los alumnos, sus materias y evaluaciones.',
    techList: ['Microservices','Java 11', 'Python', 'Spring boot', 'fastApi', 'postrgeSQL','MongoDB'],
    imageSrc: '/img/Wallpaper_school.jpg', // Cambia por la URL de la imagen del proyecto
    isUnderConstruction: true, // Cambia a false para que el demo esté disponible
    demoLink: '', // Dejar vacío si no tienes demo disponible
    githubLink: 'https://github.com/RobertoGaspar/NeoSchool',
  }];


  return (
    <Box sx={{ marginBottom: 6,paddingLeft: { xs: '5%', sm: '10%', md: '20%' } }}>
      {/* Título de la sección */}
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: 4 }}>
        Mis Proyectos
      </Typography>
      
      {/* Grid de proyectos */}
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {/* Aquí se usa el componente MProyectCard con los datos del proyecto */}
            <MProyectCard
              projectName={project.name}
              description={project.description}
              techList={project.techList}
              isUnderConstruction={project.isUnderConstruction}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              imageSrc={project.imageSrc}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  ); 

}

export default Proyects;
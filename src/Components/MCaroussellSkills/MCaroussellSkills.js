import React from 'react';
import Slider from 'react-slick';
import { Box, Grid, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MCarousellSkills = () => {
  const logos = [
    { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', link: 'https://www.java.com/' },
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', link: 'https://www.python.org/' },
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', link: 'https://reactjs.org/' },
    { name: 'Vuetify', url: 'https://bestofjs.org/logos/vuetify.svg', link: 'https://vuetifyjs.com/en/' },
    { name: 'Spring', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', link: 'https://spring.io/' },
    { name: 'Spring Boot', url: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png', link: 'https://spring.io/projects/spring-boot' },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', link: 'https://www.docker.com/' },
    { name: 'Flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', link: 'https://flutter.dev/' },
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Jenkins', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', link: 'https://www.jenkins.io/' },
    { name: 'SonarQube', url: 'https://1.bp.blogspot.com/-P_wQPnW4SzU/XiiW_632zlI/AAAAAAAAAD0/EtFkMUkJ1IkJrac4lBCbFKMKfLSyjEDKQCLcBGAsYHQ/s640/DV-SonarQube.png', link: 'https://www.sonarqube.org/' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3, // Mostrar solo 3 elementos
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true, // Para centrar los elementos
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3, // En pantallas grandes
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // En pantallas medianas
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // En pantallas pequeñas
        },
      },
    ],
  };

  const handleClick = (link) => {
    window.open(link, '_blank'); // Abre la página en una nueva pestaña
  };

  return (
    <Grid container spacing={2} sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
      <Box sx={{ width: '70%', my: 6, px: 2 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Tecnologías
        </Typography>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Box key={index} sx={{ textAlign: 'center', p: 2 }}>
              <img
                src={logo.url}
                alt={logo.name}
                style={{
                  height: 200,
                  maxWidth: '100%',
                  objectFit: 'contain',
                  margin: '0 auto',
                  cursor: 'pointer', // Cambia el cursor al hacer hover
                }}
                onClick={() => handleClick(logo.link)} // Llama a la función handleClick con el enlace
              />
              <Typography variant="h6" sx={{ mt: 2 }}>
                {logo.name}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Grid>
  );
};

export default MCarousellSkills;

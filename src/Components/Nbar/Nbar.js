import React, { useState, useEffect  } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Nbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Función para detectar el scroll y cambiar el estado
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Cuando el scroll pase 50px, cambiamos el estado
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Escuchar el evento de scroll

    return () => {
      window.removeEventListener('scroll', handleScroll); // Limpiar el evento cuando el componente se desmonte
    };
  }, []);



  // Toggle para abrir y cerrar el Drawer en pantallas pequeñas
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  const drawerList = (
    <Box sx={{ width: 250 }}>
      <List> 
        <ListItem button onClick={() => scrollToSection('about')}>
          <ListItemText primary="Sobre mí..." />
        </ListItem>
        <ListItem button onClick={() => scrollToSection('proyects')} >
          <ListItemText primary="Proyectos" />
        </ListItem>
        <ListItem button onClick={() => scrollToSection('contact')}>
          <ListItemText primary="Contactame" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{        
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent', // Cambiar el fondo según el scroll
        color: isScrolled ? 'white' : 'black',
        boxShadow: isScrolled ? 4 : 0, // Añadir sombra al hacer scroll
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease', // Transición suave
        zIndex: 10,
        boxShadow: 'none',
        border: 'none'  }}>
      <Toolbar>
        {/* Icono de Menú para pantallas pequeñas */}
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>

        {/* Logo o Título */}
        <Typography variant="h6" sx={{ flexGrow: 1 }} onClick={() => scrollToSection('home')}>
          Roberto Gaspar Dev
        </Typography>

        {/* Menú para pantallas grandes */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}> 
          <Button color="inherit" onClick={() => scrollToSection('about')} >Sobre mí...</Button>
          <Button color="inherit" onClick={() => scrollToSection('proyects')}>Proyectos</Button>
          <Button color="inherit" onClick={() => scrollToSection('contact')}>Contactame</Button>
        </Box>

        {/* Drawer para pantallas pequeñas */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          {drawerList}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Nbar;
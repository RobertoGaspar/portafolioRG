import React, { useState, useEffect  } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { motion } from 'framer-motion'; // Importación de framer-motion

function Nbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setDrawerOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawerList = (
    <Box sx={{ width: 250 }}>
      <List> 
        <ListItem button onClick={() => scrollToSection('about')}>
          <ListItemText primary="Sobre mí..." />
        </ListItem>
        <ListItem button onClick={() => scrollToSection('proyect')} >
          <ListItemText primary="Proyectos" />
        </ListItem>
        <ListItem button onClick={() => scrollToSection('contact')}>
          <ListItemText primary="Contactame" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <AppBar position="fixed" sx={{        
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255 )',
          color: isScrolled ? 'white' : 'black',
          boxShadow: isScrolled ? 4 : 0,
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          zIndex: 10,
          border: 'none'
        }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }} onClick={() => scrollToSection('home')}>
            Roberto Gaspar Dev
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" onClick={() => scrollToSection('about')}>Sobre mí...</Button>
            <Button color="inherit" onClick={() => scrollToSection('proyect')}>Proyectos</Button>
            <Button color="inherit" onClick={() => scrollToSection('contact')}>Contactame</Button>
          </Box>

          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
            {drawerList}
          </Drawer>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}

export default Nbar;

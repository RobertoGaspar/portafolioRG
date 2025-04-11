import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

function Nbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        {['about', 'proyect', 'contact'].map((section, index) => (
          <motion.div
            key={section}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
          >
            <ListItem button onClick={() => scrollToSection(section)}>
              <ListItemText
                primary={
                  section === 'about'
                    ? 'Sobre mí...'
                    : section === 'proyect'
                    ? 'Proyectos'
                    : 'Contactame'
                }
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255)',
          color: isScrolled ? 'white' : 'black',
          boxShadow: isScrolled ? 4 : 0,
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          zIndex: 10,
          border: 'none',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {/* Icono de menú para móviles */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo / Título */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              variant="h6"
              sx={{ cursor: 'pointer' }}
              onClick={() => scrollToSection('home')}
            >
              Roberto Gaspar Dev
            </Typography>
          </motion.div>

          {/* Enlaces para pantallas grandes alineados a la derecha */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {['about', 'proyect', 'contact'].map((section, index) => (
              <motion.div
                key={section}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Button color="inherit" onClick={() => scrollToSection(section)}>
                  {section === 'about'
                    ? 'Sobre mí...'
                    : section === 'proyect'
                    ? 'Proyectos'
                    : 'Contactame'}
                </Button>
              </motion.div>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}

export default Nbar;

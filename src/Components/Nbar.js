import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Nbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle para abrir y cerrar el Drawer en pantallas pequeñas
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerList = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Icono de Menú para pantallas pequeñas */}
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>

        {/* Logo o Título */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mi Portafolio
        </Typography>

        {/* Menú para pantallas grandes */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/services">Services</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
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
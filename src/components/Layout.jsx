import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sistema Antifraude
          </Typography>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Link to="/clientes" style={{ color: 'white', textDecoration: 'none' }}>Clientes</Link>
            <Link to="/transacciones" style={{ color: 'white', textDecoration: 'none' }}>Transacciones</Link>
            <Link to="/fraudes-sospechados" style={{ color: 'white', textDecoration: 'none' }}>Fraudes Sospechados</Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;

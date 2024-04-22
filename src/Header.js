// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material'; // Import from Material-UI
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Header.css'; // Custom CSS for Header

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="brand">
          Real Estate
        </Typography>
        <Button variant="contained" color="primary">
          Material-UI Button
        </Button>
        <button className="btn btn-secondary">Bootstrap Button</button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const loggedInLinks = () => {
    return (

      <>
      <Button color="inherit" component={ Link } to="/">Home</Button>
      <Button color="inherit" component={ Link } to="/publicbooks">Public Library</Button>
      <Button color="inherit" onClick={ handleLogoutClick }>Logout</Button>
    </>
    )
  }

  const loggedOutLinks = () => {
    return (
      <>
      <Button color="inherit" component={ Link } to="/signup">Create Account</Button>
      <Button color="inherit" component={ Link } to="/login">Login</Button>
    </>
    )
  }

  return (

    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{ background: '#557788' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Page Turner
          <span role="img" aria-label="books">📖</span>
          <span role="img" aria-label="books">👓</span>
          </Typography>
          { user ? loggedInLinks() : loggedOutLinks()} 
          </Toolbar>
      </AppBar>
    </Box>


  
  );
}

export default NavBar;
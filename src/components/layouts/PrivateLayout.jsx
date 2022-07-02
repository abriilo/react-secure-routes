/**
 *    © 2022 REACT SECURE ROUTES
 *    Author: Abraham Mitiku
 *
 *
 */

//-------------------------------------------------------------------

// rendering route childrens using outlet
// here: you can add navigations like (topbar, bottombar, sidebars ...etc) for secure pages (private pages)

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, Outlet } from "react-router-dom";
import { deleteCookie } from "../../utils/Cookies";

const PrivateLayout = () => {
  let navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    window.localStorage.removeItem("access");
    setTimeout(() => {
      navigate("/", {replace:true});
    }, 300);
  };

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
     <Outlet/> 
    </>
  );
};

export default PrivateLayout;
/**
 *    © 2022 REACT SECURE ROUTES
 *    Author: Abraham Mitiku
 *
 *
 */

//-------------------------------------------------------------------

// rendering route childrens using outlet
// here: you can add navigations like (topbar, bottombar, sidebars ...etc) for public pages

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from "react-router-dom";
import { setCookie } from "../../utils/Cookies";
import { setLocalStorage } from "../../utils/Storage";
import { useNavigate, useLocation } from "react-router-dom";

const PublicLayout = () => {
    let navigate = useNavigate();
    let location = useLocation();

    const handleLogin = () =>{

        setLocalStorage("access", `here_your_access_token`);
        setCookie("refresh", `here_your_refresh_key`, 7);

        setTimeout(() => {
 
        let from = location.state?.from?.pathname || "/dashboard";
        navigate(from, { replace: true });

        }, 500);
    }

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
            Home
          </Typography>
          <Button color="inherit" onClick={handleLogin}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
     <Outlet/>
     </>
  );
}


export default PublicLayout;





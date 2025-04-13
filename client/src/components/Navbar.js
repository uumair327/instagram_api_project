import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <InstagramIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Instagram API Integration
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={RouterLink}
            to="/profile"
          >
            Profile
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/media"
          >
            Media
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
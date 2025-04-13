import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box, Alert } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we're returning from Instagram auth
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      // The server will handle the code exchange and redirect
      window.location.href = `http://localhost:5000/auth/instagram/callback?code=${code}`;
    }
  }, []);

  const handleInstagramLogin = () => {
    window.location.href = 'http://localhost:5000/auth/instagram';
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <InstagramIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography component="h1" variant="h4" gutterBottom>
          Welcome to Instagram API Integration
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Connect your Instagram account to view your profile and media
        </Typography>
        <Alert severity="info" sx={{ mb: 3 }}>
          This app uses Instagram Basic Display API. You need to be added as a test user in the Facebook Developer App.
        </Alert>
        <Button
          variant="contained"
          startIcon={<InstagramIcon />}
          onClick={handleInstagramLogin}
          sx={{ mt: 3, mb: 2 }}
        >
          Login with Instagram
        </Button>
      </Box>
    </Container>
  );
};

export default Login; 
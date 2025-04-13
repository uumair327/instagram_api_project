import React from 'react';
import './index.css';

const Login = () => {
  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    window.location.href = '/profile';
  };

  return (
    <div className="login-container">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
        alt="Instagram logo" 
        className="insta-logo"
      />
      <h1>Welcome</h1>
      <button onClick={handleLogin}>Login with Instagram</button>
    </div>
  );
};

export default Login;

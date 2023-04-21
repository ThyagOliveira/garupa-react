import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Snackbar, Alert } from '@mui/material';
import api from '../../utils/api';
import auth from '../../utils/auth';
import './styles.css';

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await api.loginTest(credentials);

    if (response.status) {
      const { token } = response;
      auth.setAuthToken(token);

      navigate('/');
    }
    setError('Credenciais inválidas');
  };

  function handleSnackbarClose() {
    setError(false);
  }

  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={handleSubmit}>
        <Typography className="formTitle" variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          className="formText"
          error={Boolean(error)}
          label="E-mail"
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          className="formText"
          error={Boolean(error)}
          label="Senha"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button className="formButton" type="submit" variant="contained">
          Entrar
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={Boolean(error)}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="error"
            sx={{ width: '100%' }}
          >
            {error}
          </Alert>
        </Snackbar>
      </form>
    </div>
  );
}

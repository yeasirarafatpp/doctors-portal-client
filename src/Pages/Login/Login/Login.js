import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { isLoading, authError, user, loginUser } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const data = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = data;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 15 }}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    {user?.email && <Alert severity="success">Welcome To Website</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button
                            variant="contained"
                            sx={{ width: '75%', m: 1 }}
                            type="submit"
                        >Login</Button>
                        <NavLink
                            to="/register"
                            style={{ textDecoration: 'none' }}
                        >
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
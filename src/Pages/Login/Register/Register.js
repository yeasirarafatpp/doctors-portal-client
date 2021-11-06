import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const data = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = data;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.RePassword) {
            alert('Your Password did not matched');
            return
        }
        registerUser(loginData.email, loginData.password);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 15 }}>
                    <Typography variant="body1" gutterBottom>
                        Register Here
                    </Typography>
                    {user?.email && <Alert severity="success">Registration Successful</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="UserName"
                            type="text"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email"
                            name="email"
                            type="email"
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
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Confirm Password"
                            type="password"
                            name="RePassword"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button
                            variant="contained"
                            sx={{ width: '75%', m: 1 }}
                            type="submit"
                        >Register</Button>
                        <NavLink
                            to="/login"
                            style={{ textDecoration: 'none' }}
                        >
                            <Button variant="text">Already Registered ? Login</Button>
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

export default Register;
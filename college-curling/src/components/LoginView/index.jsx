import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import Button     from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import Box        from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container  from '@mui/material/Container';
import Alert      from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack      from '@mui/material/Stack';

import { signIn }    from '../../services/userServices';
import { loginUser } from '../../atoms/loginUser';

export default function LoginView(){

    const [username, setUsername]   = useState("");
    const [password, setPassword]   = useState("");

    // Allows for alert at bottom when login fails
    const [loginFail, setLoginFail] = useState(false);

    // Set user function for user atom
    const setUser  = useSetRecoilState(loginUser);

    const history = useHistory();


    const handleSubmit = () => {
        signIn(username, password)
            .then((resp) => {
                console.log(resp);
                if (resp) {
                    setLoginFail(false);
                    setUser(resp);
                    // Go to previous route user was trying to access
                    history.goBack();
                } else {
                    // will render alert component
                    setLoginFail(true);
                }
                
            })
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Container component="main" maxWidth="sm">
                <Stack 
                    sx={{
                        marginTop: '40px',
                        width: '100%',
                        alignItems: 'center',
                    }}
                    spacing={2}
                >
                    <Typography component="h1" variant="h3">
                        Login
                    </Typography> 
                    <Box sx={{marginTop: '20px'}}>
                    <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            id="username"
                            onChange={(event) => setUsername(event.target.value)}
                        >
                        </TextField>
                    </Box>                    
                    <Box sx={{marginTop: '20px'}}>
                    <TextField
                            margin="normal"
                            type="password"
                            required
                            fullWidth
                            label="Password"
                            id="password"
                            onChange={(event) => setPassword(event.target.value)}
                        >
                        </TextField>
                    </Box>
                    <Box sx={{marginTop: '30px'}}>
                        <Button
                            fullWidth
                            variant="contained" 
                            onClick={handleSubmit}
                        >
                            Login
                        </Button>
                    </Box>
                    {loginFail ? 
                        <Alert severity="error">
                            <AlertTitle>Login Failed</AlertTitle>
                            Check your <strong>username</strong> and <strong>password</strong>!
                        </Alert>
                        :
                        <Box></Box>
                    }
                    
                    </Stack>
                    <Stack 
                        sx={{
                            marginTop: '40px',
                            width: '100%',
                            alignItems: 'center',
                        }}
                        spacing={2}
                    >                    
                    <Box sx={{marginTop: '20px'}}>
                        <Typography>Not already registered? <Link to="/register">Sign up</Link></Typography>
                    </Box>
                    <Box sx={{marginTop: '20px'}}>
                        <Typography>Forgot your password? <Link to="/reset">Reset password</Link></Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};
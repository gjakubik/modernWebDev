import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Button     from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import Box        from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container  from '@mui/material/Container';
import Alert      from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack      from '@mui/material/Stack';

import { resetPassword } from '../../services/userServices';
import { isLoggedIn }     from '../../atoms/loginUser';

export default function ResetView(){

    const [email, setEmail] = useState("");
    const history           = useHistory();

    // Allows for alert at bottom when reset fails
    const [loginFail, setLoginFail]   = useState(false);
    const [errMessage, setErrMessage] = useState("");

    // Set user function for user atom
    const isSignedIn = useRecoilValue(isLoggedIn);

    const handleSubmit = () => {
        resetPassword(email)
            .then((resp) => {
                console.log(resp);
                if (resp === "success") {
                    setLoginFail(false);
                    // Allow user to login when they come back
                    history.push("/login");
                } else {
                    // will render alert component
                    setErrMessage(resp);
                    setLoginFail(true);
                }
                
            })
    };

    // Use effect to catch if the user is signed in and should be sent home
    useEffect(() => {
        if (isSignedIn) {
            history.push("/");
        }
    }, [])

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
                        Reset Password
                    </Typography> 
                    <Box sx={{marginTop: '20px'}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email"
                            id="email"
                            onChange={(event) => setEmail(event.target.value)}
                        >
                        </TextField>
                    </Box>
                    <Box sx={{marginTop: '30px'}}>
                        <Button
                            fullWidth
                            variant="contained" 
                            onClick={handleSubmit}
                        >
                            Reset Password
                        </Button>
                    </Box>
                    {loginFail ? 
                        <Alert severity="error">
                            <AlertTitle>Reset Failed!</AlertTitle>
                            {errMessage}
                        </Alert>
                        :
                        <Box></Box>
                    }
                </Stack>
            </Container>
        </Box>
    );
};
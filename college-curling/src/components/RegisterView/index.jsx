import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';

import Button             from '@mui/material/Button';
import TextField          from '@mui/material/TextField';
import Box                from '@mui/material/Box';
import Typography         from '@mui/material/Typography';
import Container          from '@mui/material/Container';
import Alert              from '@mui/material/Alert';
import AlertTitle         from '@mui/material/AlertTitle';

import { addUser }  from '../../services/userServices';
import { loginUser } from '../../atoms/loginUser';
import { DEFAULT_ROLE }    from "../../constants.js"

export default function RegisterView(){

    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: DEFAULT_ROLE
    });

    const [signupFail, setSignupFail] = useState(false);
    const setUser = useSetRecoilState(loginUser);
    const history = useHistory();
    const loading = false;

    // flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);

    // useEffect that run when changes are made to the state variable flags
    useEffect(() => {
        if (newUser && add) {
        addUser(newUser).then((userCreated) => {
            if (userCreated) {
                setUser(userCreated);
                history.push("/");
            } else {
                setSignupFail(true);
            }
            setAdd(false);
        });
        }
    }, [newUser, add, setUser, history]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
        const { name, value: newValue } = e.target;
        console.log(newValue);

        setNewUser({
        ...newUser,
        [name]: newValue
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted: ", e.target);
        setAdd(true);
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
            {loading ? <Typography>Loading</Typography> :
                <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        marginTop: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h3">
                        Register
                    </Typography> 
                    <Box sx={{marginTop: '20px'}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="First Name"
                            id="firstName"
                            name="firstName"
                            onChange={(event) => onChangeHandler(event)}
                        >
                        </TextField>
                    </Box>
                    <Box sx={{marginTop: '20px'}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Last Name"
                            id="lastName"
                            name="lastName"
                            onChange={(event) => onChangeHandler(event)}
                        >
                        </TextField>
                    </Box>  
                    <Box sx={{marginTop: '20px'}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email"
                            id="email"
                            name="email"
                            onChange={(event) => onChangeHandler(event)}
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
                            name="password"
                            onChange={(event) => onChangeHandler(event)}
                        >
                        </TextField>
                    </Box>                    
                    <Box sx={{marginTop: '20px'}}>
                        {add ?
                            <Button
                                disabled
                                variant="contained" 
                                onClick={handleSubmit}
                            >
                                Register
                            </Button>
                            :
                            <Button
                                variant="contained" 
                                onClick={handleSubmit}
                            >
                                Register
                            </Button>
                        }
                    </Box>
                    <Box sx={{marginTop: '20px'}}>
                        {signupFail ?
                            <Alert severity="error">
                                <AlertTitle>Sign up Failed</AlertTitle>
                                Check that you have all required fields!
                            </Alert>
                            :
                            <Box></Box>
                        }
                    </Box>
                </Box>
            </Container>
            }
        </Box>
    );
};
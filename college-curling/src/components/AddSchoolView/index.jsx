import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import Button             from '@mui/material/Button';
import TextField          from '@mui/material/TextField';
import Box                from '@mui/material/Box';
import Typography         from '@mui/material/Typography';
import Container          from '@mui/material/Container';
import Alert              from '@mui/material/Alert';
import AlertTitle         from '@mui/material/AlertTitle';

import { createSchool } from '../../services/parse/schoolQueries';
import { getUser } from '../../atoms/loginUser';

export default function AddSchoolView(){

    const [schoolName, setSchoolName] = useState();
    const [city, setCity]             = useState();
    const [state, setState]           = useState();
    const loading = false;

    const user                        = useRecoilValue(getUser);
    // Allows for alert at bottom when login fails
    const [updateFail, setUpdateFail] = useState(false);
    const [updateSuccess, setUpdateSucces] = useState(false);

    const handleSubmit = () => {
        if (user.get("role") == "admin"){
            createSchool(schoolName, city, state);
            setUpdateFail(false);
            setUpdateSucces(true);        
        }
        else {
            console.log("Failed to update database because of insufficient role. \"" + user.get("role") + "\" role does not have permission!");
            setUpdateFail(true);
            setUpdateSucces(false);        
        }
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
                        Add School
                    </Typography> 
                    <Box sx={{marginTop: '20px'}}>
                    <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="School Name"
                            id="school name"
                            onChange={(event) => setSchoolName(event.target.value)}
                        >
                        </TextField>
                    </Box>                    
                    <Box sx={{marginTop: '20px'}}>
                    <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="City"
                            id="city"
                            onChange={(event) => setCity(event.target.value)}
                        >
                        </TextField>
                    </Box>                    
                    <Box sx={{marginTop: '20px'}}>
                    <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="State"
                            id="state"
                            onChange={(event) => setState(event.target.value)}
                        >
                        </TextField>
                    </Box>
                    <Button
                        variant="contained" 
                        onClick={handleSubmit}
                    >
                        Add School
                    </Button>
                </Box>
                {updateFail ? 
                    <Alert severity="error">
                        <AlertTitle>Update Failed</AlertTitle>
                        Failed to update database because of insufficient role. You don't have permission!
                    </Alert>
                    :
                    <Box> </Box>           
                    }                
                    {updateSuccess ? 
                        <Alert severity="success">
                         <AlertTitle>Update Success</AlertTitle>
                         Successfully updated database!
                        </Alert>
                        :
                        <Box> </Box>                
                        }
            </Container>
            }
        </Box>
    );
};

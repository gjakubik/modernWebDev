import React, { useEffect, useState } from 'react';

import Button             from '@mui/material/Button';
import TextField          from '@mui/material/TextField';
import Box                from '@mui/material/Box';
import Typography         from '@mui/material/Typography';
import Container          from '@mui/material/Container';

import { createSchool } from '../../services/parseQueries';

export default function AddSchoolView(){

    const [schoolName, setSchoolName] = useState();
    const [city, setCity]             = useState();
    const [state, setState]           = useState();
    const loading = false;


    const handleSubmit = () => {
        createSchool(schoolName, city, state);
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
            </Container>
            }
        </Box>
    );
};

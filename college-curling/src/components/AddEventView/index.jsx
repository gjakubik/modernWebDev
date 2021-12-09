import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import Button             from '@mui/material/Button';
import TextField          from '@mui/material/TextField';
import MenuItem           from '@mui/material/MenuItem'
import Box                from '@mui/material/Box';
import Typography         from '@mui/material/Typography';
import Container          from '@mui/material/Container';
import DatePicker         from '@mui/lab/DatePicker';
import Alert              from '@mui/material/Alert';
import AlertTitle         from '@mui/material/AlertTitle';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { getSchools } from '../../services/parse/schoolQueries';
import { createEvent } from '../../services/parse/eventQueries';
import { getUser } from '../../atoms/loginUser';

export default function AddTeamView(){

    const [hostSchool, setHostSchool] = useState({
        objectId: "",
        schoolName: "",
        city: "",
        state: ""
    });
    const [startDate, setStartDate]     = useState(new Date());
    const [endDate, setEndDate]         = useState(new Date());
    const [eventName, setEventName]     = useState();
    const [city, setCity]               = useState();
    const [state, setState]             = useState();
    const [schoolDict, setSchoolDict]   = useState({});
    const [loading, setLoading]         = useState(true);

    const user                          = useRecoilValue(getUser);
    // Allows for alert at bottom when login fails
    const [updateFail, setUpdateFail]   = useState(false);
    const [updateSuccess, setUpdateSucces] = useState(false);

    // Get the list of schools to display
    useEffect(() => {
        // it needs to be async for the request, so capture the promise with a .then
        getSchools().then((result) => setSchoolDict(result));
        setLoading(false);
    }, [])

    const handleSubmit = () => {
        if (user.get("role") === "admin" || user.get("role") === "organizer"){
            createEvent(eventName, startDate, endDate, hostSchool.objectId, city, state);
            console.log(eventName, startDate, endDate, hostSchool.objectId, city, state);
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
                        Add Event
                    </Typography> 
                    <Box sx={{marginTop: '20px'}}>
                        <TextField
                            margin="normal"
                            required
                            select
                            fullWidth
                            label="Host School"
                            id="select school"
                            value={hostSchool.schoolName}
                            onChange={(event) => {setHostSchool(schoolDict[event.target.value])}}
                        >
                            {
                            Object.values(schoolDict).map((school) => (
                                <MenuItem key={school.objectId} value={school.schoolName} >
                                    {school.schoolName}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{marginTop: '20px'}}>
                    <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Event Name"
                            id="eventName"
                            onChange={(event) => setEventName(event.target.value)}
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
                    <Box>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Start Date"
                                value={startDate}
                                onChange={(event) => {
                                    setStartDate(event);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>                    
                    <Box>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="End Date"
                                value={endDate}
                                onChange={(event) => {
                                    setEndDate(event);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                    <Button
                        variant="contained" 
                        onClick={handleSubmit}
                    >
                        Add Event
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

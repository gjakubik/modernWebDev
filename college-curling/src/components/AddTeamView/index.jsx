import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import Button             from '@mui/material/Button';
import TextField          from '@mui/material/TextField';
import MenuItem           from '@mui/material/MenuItem'
import Box                from '@mui/material/Box';
import Typography         from '@mui/material/Typography';
import Container          from '@mui/material/Container';
import DatePicker         from '@mui/lab/DatePicker';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Alert              from '@mui/material/Alert';
import AlertTitle         from '@mui/material/AlertTitle';

import { getSchools } from '../../services/parse/schoolQueries';
import { createTeam } from '../../services/parse/teamQueries';
import { getUser } from '../../atoms/loginUser';

export default function AddTeamView(){

    const [school, setSchool] = useState({
        objectId: "",
        schoolName: "",
        city: "",
        state: ""
    });
    const [year, setYear]             = useState(new Date());
    const [wins, setWins]             = useState(0);
    const [losses, setLosses]         = useState(0);
    const [draws, setDraws]           = useState(0);
    const [schoolDict, setSchoolDict] = useState({});
    const [loading, setLoading]       = useState(true);

    const user                        = useRecoilValue(getUser);
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
        if (user.get("role") === "player" 
           || user.get("role") === "admin" 
           || user.get("role") === "organizer"){
            createTeam(year.getFullYear(), 1, school.objectId, wins, losses, draws);
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
                        Add Team
                    </Typography> 
                    <Box sx={{marginTop: '20px'}}>
                        <TextField
                            margin="normal"
                            required
                            select
                            fullWidth
                            label="School"
                            id="select school"
                            value={school.schoolName}
                            onChange={(event) => {setSchool(schoolDict[event.target.value])}}
                        >
                            {
                            Object.values(schoolDict).map((school) => (
                                <MenuItem key={school.objectId} value={school.schoolName} >
                                    {school.schoolName}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box>
                        <DatePicker
                            required
                            views={['year']}
                            label="Select Year"
                            value={year}
                            maxDate={new Date()}
                            onChange={(newVal) => setYear(newVal)}
                            renderInput={(params) => <TextField {...params} helperText={null} />}
                        />
                    </Box>
                    <Typography component="h3" variant="h5" sx={{marginTop: '10px'}}>
                        Record
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >   
                        <TextField
                            id="wins"
                            label="Wins"
                            type="number"
                            value={wins}
                            onChange={(event) => setWins(event.target.value)}
                            InputLabelProps={{shrink: true}}
                            style={{
                                width: "12%",
                            }}
                        />
                        <HorizontalRuleIcon />
                        <TextField
                            id="draws"
                            label="Draws"
                            type="number"
                            value={draws}
                            onChange={(event) => setDraws(event.target.value)}
                            InputLabelProps={{shrink: true}}
                            style={{
                                width: "12%",
                            }}
                        />
                        <HorizontalRuleIcon />
                        <TextField
                            id="losses"
                            label="Losses"
                            type="number"
                            value={losses}
                            onChange={(event) => setLosses(event.target.value)}
                            InputLabelProps={{shrink: true}}
                            style={{
                                width: "12%",
                            }}
                        />
                    </Box>
                    <Button
                        variant="contained" 
                        onClick={handleSubmit}
                    >
                        Add Team
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

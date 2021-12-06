import React, { useEffect, useState } from 'react';

import Button             from '@mui/material/Button';
import TextField          from '@mui/material/TextField';
import MenuItem           from '@mui/material/MenuItem'
import Box                from '@mui/material/Box';
import Typography         from '@mui/material/Typography';
import Container          from '@mui/material/Container';
import DatePicker         from '@mui/lab/DatePicker';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

import { getSchools } from '../../services/parse/schoolQueries';
import { createTeam } from '../../services/parse/teamQueries';

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

    // Get the list of schools to display
    useEffect(() => {
        // it needs to be async for the request, so capture the promise with a .then
        getSchools().then((result) => setSchoolDict(result));
        console.log(schoolDict);
        setLoading(false);
    }, [])

    const handleSubmit = () => {
        createTeam(year.getFullYear(), 1, school.objectId, wins, losses, draws);
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
            </Container>
            }
        </Box>
    );
};

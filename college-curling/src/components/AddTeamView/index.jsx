import React, { useEffect, useState } from 'react';

import Button     from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import MenuItem   from '@mui/material/MenuItem'
import Box        from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container  from '@mui/material/Container';
import DatePicker from '@mui/lab/DatePicker';

import { getSchools } from '../../services/parseQueries';
import { setDate } from 'date-fns';

export default function AddTeamView(){

    const [school, setSchool]         = useState("");
    const [year, setYear]             = useState(new Date());
    const [schoolList, setSchoolList] = useState([]);
    const [loading, setLoading]       = useState(true);

    // Get the list of schools to display
    useEffect(() => {
        // it needs to be async for the request, so capture the promise with a .then
        getSchools().then((result) => setSchoolList(result));
        console.log(schoolList);
        setLoading(false);
    }, [])

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            {loading ? <Typography>Loading</Typography> :
                <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h3">
                        Add Team
                    </Typography> 
                    <Box>
                        <TextField
                            margin="normal"
                            required
                            select
                            fullWidth
                            label="School"
                            id="select school"
                            value={school}
                            onChange={(event) => setSchool(event.target.value)}
                        >
                            {
                            schoolList.map((school) => (
                                <MenuItem key={school.objectId} value={school.schoolName} >
                                    {school.schoolName}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box>
                        <DatePicker
                            views={['year']}
                            label="Select Year"
                            value={year}
                            maxDate={new Date()}
                            onChange={(newVal) => setDate(newVal)}
                            renderInput={(params) => <TextField {...params} helperText={null} />}
                        />
                    </Box>
                </Box>
            </Container>
            }
        </Box>
    );
};

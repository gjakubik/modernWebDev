import React, { useEffect } from "react";

import Box         from '@mui/material/Box';
import Grid        from '@mui/material/Grid';
import Stack       from '@mui/material/Stack';
import Card        from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button      from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import Title       from "../Common/Title";

export default function PlayerList({ players }) {

    useEffect(() => {
        console.log(players);

    }, [players]);

    return (
        <React.Fragment>
                <Title>Players</Title>
                {((players === []) || (players === undefined)) ? <Title>Error With Player List</Title>
                :
                <Grid container spacing={3} sx={{marginTop: '30px'}}>
                    {players.map((player) => {
                        console.log(player);
                        return (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card 
                                sx={{
                                    margin: 'auto', 
                                    width: '80%',
                                    '&:hover': {
                                        cursor: "pointer",
								        backgroundColor: '#cfe7ff',
                                    }
                                }} 
                                key={player.playerId}
                            >
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {player.firstName} {player.lastName}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {player.class}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )})}
                </Grid>
                }
        </React.Fragment>
    )
}
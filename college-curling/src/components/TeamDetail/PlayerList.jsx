import React, { useEffect } from "react";

import Box         from '@mui/material/Box';
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
                {((players === []) || (players === undefined)) ? <Title>Error With Player List</Title>
                :
                <Stack spacing={4}>
                    {players.map((player) => {
                        console.log(player);
                        return (
                        <Card sx={{ minWidth: 200, maxWidth: 225 }} key={player.objectId}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {player.firstName} {player.lastName}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {player.class}
                                </Typography>
                            </CardContent>
                        </Card>
                    )})}
                </Stack>
                }
        </React.Fragment>
    )
}
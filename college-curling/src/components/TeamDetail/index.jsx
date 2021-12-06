import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useRecoilState } from "recoil";

import { teamInfo } from "../../atoms/teamInfo";

import { getPlayers } from "../../services/parse/playerQueries";

import PlayerList from "./PlayerList";
import Title      from "../Common/Title";


export default function TeamDetail() {

    const [team, setTeam]       = useRecoilState(teamInfo);
    const [players, setPlayers] = useState([]);

    // Get players and past performance here
    useEffect(async () => {
        console.log(team);
        if (team === ({} || null)) {
            console.log(team); 
            return; 
        }

        const newPlayers = await getPlayers(team.objectId);

        setPlayers(newPlayers);
    }, [team])

    return (
        <React.Fragment>
            <Typography>Team Detail</Typography>
            <Typography>{team ? team.schoolName : "No team selected"}</Typography>
            {players === (null || {}) ?  <Title>Error getting players</Title> : <PlayerList players={players} />}
        </React.Fragment>
    )
}
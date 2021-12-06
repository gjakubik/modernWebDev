import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useRecoilState } from "recoil";

import { teamInfo } from "../../atoms/teamInfo";

import { getPlayers } from "../../services/parse/playerQueries";


export default function TeamDetail() {

    const [team, setTeam] = useRecoilState(teamInfo);
    const [fullInfo, setFullInfo] = useState({});

    // Get players and past performance here
    useEffect(async () => {
        if (team === ({} || null)) { return }

        const players = await getPlayers(team.objectId);

        const newTeam = { ...team, "players": players};

        setFullInfo(newTeam);
    }, [team])

    return (
        <React.Fragment>
            <Typography>Team Detail</Typography>
            <Typography>{team ? team.schoolName : "No team selected"}</Typography>
        </React.Fragment>
    )
}
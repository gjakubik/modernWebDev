import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useRecoilState } from "recoil";

import { teamInfo } from "../../atoms/teamInfo";

import { getPlayers }       from "../../services/parse/playerQueries";
import { getTeamsBySchool } from "../../services/parse/teamQueries"; 

import PlayerList from "./PlayerList";
import Title      from "../Common/Title";
import RankingGraph from "./RankingGraph";



export default function TeamDetail() {

    const [team, setTeam]       = useRecoilState(teamInfo);
    const [players, setPlayers] = useState([]);
    const [data, setData]       = useState({
        labels: [],
        datasets: [
            {
                label: 'Rank',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    });

    // Get players and past performance here
    useEffect(() => {
        const getData = async () => {
            console.log(team);
            if ((team === null) || (team === {})) { return }

            const newPlayers = await getPlayers(team.objectId);
            console.log(newPlayers);

            const teamList = await getTeamsBySchool(team.schoolId);

            console.log(teamList);

            const labels = teamList.map((team) => team.year.toString());
            console.log(labels);
            const newData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Rank',
                        data: teamList.map((team) => team.rank),
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            }
            console.log(newData);
            setData(newData);
            setPlayers(newPlayers);
        }
        
        getData();
    }, [team])

    console.log(team);
    console.log(data);
    return (
        <React.Fragment>
            <Title>{team ? team.schoolName : "No team selected"}</Title>
            <RankingGraph data={data}/>
            {((players === null) || (players === [])) ?  <Title>Error getting players</Title> : <PlayerList players={players} />}
            
        </React.Fragment>
    )
}
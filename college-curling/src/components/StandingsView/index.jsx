import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router';

import Box       from '@mui/material/Box';
import Table     from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow  from '@mui/material/TableRow';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import Title from '../Common/Title';

import { teamInfo } from '../../atoms/teamInfo';
import { getTeams } from '../../services/parse/teamQueries';


export default function StandingsView() {

	const [teams, setTeams] = useState({});
	const setTeamInfo = useSetRecoilState(teamInfo);

	const history = useHistory();

	useEffect(() => {
		getTeams().then((res) => {
			console.log(res);
			setTeams(res);
		});
	}, []);

	const goTeamDetail = (teamId) => {
		console.log(teamId);
		console.log(teams);
		setTeamInfo(teams[teamId]);
		history.push("/teamDetail");
	}

	return (
		<React.Fragment>
			
			<Title>Rankings</Title>
			{(teams === {}) ? <Title>Loading</Title> :
				<Table size="medium">
				<TableHead>
				<TableRow>
					<TableCell sx={{textAlign: 'center'}}>Rank</TableCell>
					<TableCell sx={{textAlign: 'center'}}>School Name</TableCell>
					<TableCell sx={{textAlign: 'center'}}>Wins</TableCell>
					<TableCell sx={{textAlign: 'center'}}>Draws</TableCell>
					<TableCell sx={{textAlign: 'center'}}>Losses</TableCell>
				</TableRow>
				</TableHead>
				<TableBody>
				{Object.values(teams).map((row) => (
					<TableRow 
						key={row.objectId}
						id={row.objectId} 
						onClick={(e) => {
							console.log(e.target);
							goTeamDetail(row.objectId);
						}} 
						sx={{
							"&:hover": {
								cursor: "pointer",
								backgroundColor: '#cfe7ff',
							}
						}}
					>
						<TableCell 
							sx={{
								//textAlign: 'center',
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							{row.rank}{row.rank === 1 ? <EmojiEventsIcon sx={{marginLeft: '5px'}}/> : ""}
						</TableCell>
						<TableCell sx={{textAlign: 'center'}}>{row.schoolName}</TableCell>
						<TableCell sx={{textAlign: 'center'}}>{row.wins}</TableCell>
						<TableCell sx={{textAlign: 'center'}}>{row.ties}</TableCell>
						<TableCell sx={{textAlign: 'center'}}>{row.losses}</TableCell>
					</TableRow>
				))}
				</TableBody>
			</Table>
			}
		</React.Fragment>
	);
}
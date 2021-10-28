import React, { useState, useEffect } from 'react';

import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Title from '../Common/Title';

import { getTeams } from '../../services/parseQueries';
import StandingsList from "./StandingList";


export default function StandingsView() {

	const [teams, setTeams] = useState({});

	useEffect(async () => {
		await getTeams().then((res) => setTeams(res));
		console.log(teams);
	}, [])

	return (
		<React.Fragment>
		<Title>Rankings</Title>
		{(teams === {}) ? <Title>Loading</Title> :
			<Table size="small">
			<TableHead>
			<TableRow>
				<TableCell>Rank</TableCell>
				<TableCell>School Name</TableCell>
				<TableCell>Wins</TableCell>
				<TableCell>Draws</TableCell>
				<TableCell>Losses</TableCell>
			</TableRow>
			</TableHead>
			<TableBody>
			{Object.values(teams).map((row) => (
				<TableRow key={row.objectId}>
				<TableCell>{row.rank}</TableCell>
				<TableCell>{row.schoolName}</TableCell>
				<TableCell>{row.wins}</TableCell>
				<TableCell>{row.ties}</TableCell>
				<TableCell>{row.losses}</TableCell>
				</TableRow>
			))}
			</TableBody>
		</Table>
		}
    </React.Fragment>
	);
}
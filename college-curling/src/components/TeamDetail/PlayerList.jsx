import React from "react";

import Box       from '@mui/material/Box';
import Table     from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow  from '@mui/material/TableRow';

export default function PlayerList() {

    return (
        <React.Fragment>
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
						<TableCell>{row.rank}</TableCell>
						<TableCell>{row.schoolName}</TableCell>
						<TableCell>{row.wins}</TableCell>
						<TableCell>{row.ties}</TableCell>
						<TableCell>{row.losses}</TableCell>
					</TableRow>
				))}
				</TableBody>
			</Table>
        </React.Fragment>
    )
}
import React, { useEffect, useState } from "react";

import Box       from '@mui/material/Box';
import Table     from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow  from '@mui/material/TableRow';

import Title from '../Common/Title';

import { getEvents } from "../../services/parse/eventQueries.js";

export default function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((events) => {
      console.log(events)
      setEvents(events);
    });
  }, []);

	return (
		<React.Fragment>
			
			<Title>Upcoming Events</Title>
			{(events.length <= 0) ? <Title>Loading</Title> :
				<Table size="medium">
				<TableHead>
				<TableRow>
					<TableCell sx={{textAlign: 'center'}}>Event Name</TableCell>
          <TableCell sx={{textAlign: 'center'}}>Location</TableCell>
					<TableCell sx={{textAlign: 'center'}}>Start</TableCell>
					<TableCell sx={{textAlign: 'center'}}>End</TableCell>
				</TableRow>
				</TableHead>
				<TableBody>
				{Object.values(events).map((row) => (
					<TableRow 
						key={row.objectId}
						id={row.objectId} 
						onClick={(e) => {
							console.log(e.target);
						}} 
						sx={{
							"&:hover": {
								cursor: "pointer",
								backgroundColor: '#cfe7ff',
							}
						}}
					>
						<TableCell sx={{textAlign: 'center'}}>{row.eventName}</TableCell>
            <TableCell sx={{textAlign: 'center'}}>{row.city}, {row.state}</TableCell>
            <TableCell sx={{textAlign: 'center'}}>{row.startDate.toDateString()}</TableCell>
						<TableCell sx={{textAlign: 'center'}}>{row.endDate.toDateString()}</TableCell>
					</TableRow>
				))}
				</TableBody>
			</Table>
			}
		</React.Fragment>
	);
}
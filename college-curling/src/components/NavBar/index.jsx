/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import '@fontsource/audiowide';

import { PAGES } from '../../constants';

export default function NavBar({showNav, setShowNav, changeView}) {

	// Pages is used to define routing and page names
	// This will make the navbar easy to update
	console.log(PAGES);

	const history = useHistory();

	return (
		<React.Fragment>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={() => setShowNav(true)}
					>
					<MenuIcon />
					</IconButton>
					<Typography 
						variant="h6" 
						component="div"
						onClick={() => history.push('/')} 
						sx={{ 
							flexGrow: 1, 
							fontFamily: 'audiowide',
							'&:hover': {
								cursor: 'pointer',
							}
							}}>
						College Curling
					</Typography>
					<Button color="inherit" onClick={() => setShowNav(true)}>Login</Button>
				</Toolbar>
				</AppBar>
			</Box>
			<Drawer
				anchor='left'
				open={showNav}
				onClose={() => setShowNav(false)}
			>
				<Box
					sx={{ width: 250 }}
					role="presentation"
					onClick={() => setShowNav(false)}
					onKeyDown={() => setShowNav(false)}
				>
					<List>
						{PAGES.map((page) => (
							<ListItem button component={Link} to={page.link} key={page.name}>
								<ListItemIcon>
								{page.icon}
								</ListItemIcon>
								<ListItemText primary={page.name}/>
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</React.Fragment>
	);
}
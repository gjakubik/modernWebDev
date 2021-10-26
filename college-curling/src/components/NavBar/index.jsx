/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import '@fontsource/audiowide';

import SideDrawer from './SideDrawer';

import { PAGES } from '../../constants';

export default function NavBar() {

	// Pages is used to define routing and page names
	// This will make the navbar easy to update
	console.log(PAGES);

	const [showNav, setShowNav] = useState(false);
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
			<SideDrawer showNav={showNav} setShowNav={setShowNav} />
		</React.Fragment>
	);
}
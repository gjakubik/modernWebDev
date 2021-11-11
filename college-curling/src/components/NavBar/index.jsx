import React, { useState } from 'react';
import Parse               from 'parse';
import { useHistory }      from 'react-router-dom';
import { useRecoilValue, useSetRecoilState }  from 'recoil';

import AppBar     from '@mui/material/AppBar';
import Box        from '@mui/material/Box';
import Toolbar    from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button     from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon   from '@mui/icons-material/Menu';

import '@fontsource/audiowide';

import SideDrawer                from './SideDrawer';
import { logOut }                from '../../services/userServices';
import { isLoggedIn, loginUser } from '../../atoms/loginUser';

export default function NavBar() {

	const [showNav, setShowNav] = useState(false);
	const userLoggedIn          = useRecoilValue(isLoggedIn);
	const setUser               = useSetRecoilState(loginUser);
	const history               = useHistory();

	const handleLogOut = () => {
		logOut()
			.then((response) => {
				console.log(response);
				setUser(null);
				history.push("/");
			})
			.catch((e) => alert(e));
	};

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
					{userLoggedIn 
						? 
						<Button color="inherit" onClick={() => handleLogOut()}>Log Out</Button>
						:
						<Button color="inherit" onClick={() => history.push("/login")}>Login</Button>
					}
					
				</Toolbar>
				</AppBar>
			</Box>
			<SideDrawer showNav={showNav} setShowNav={setShowNav} />
		</React.Fragment>
	);
}
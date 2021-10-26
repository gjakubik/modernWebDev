import React from "react";
import { Link } from "react-router-dom";

import Drawer from '@mui/material/Drawer';
import { Box } from "@mui/system";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { PUBLIC_PAGES, PRIVATE_PAGES } from '../../constants';

export default function SideDrawer({showNav, setShowNav}) {

    return (
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
						{PUBLIC_PAGES.map((page) => (
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
						{/* This list can be converted to one only available to admins*/}
						{PRIVATE_PAGES.map((page, index) => (
						<ListItem button component={Link} to={page.link} key={page.id}>
							<ListItemIcon>
							{page.icon}
							</ListItemIcon>
							<ListItemText primary={page.name} />
						</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
    )
};
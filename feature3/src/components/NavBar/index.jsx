import './style';
import img from '../../images/logo.png';
import '@fontsource/audiowide';
import { Link } from 'preact-router';

import { PAGES } from '../../constants';

export default function NavBar() {
	console.log(PAGES);

	return (
		<nav class="navContainer">
			<div class="navHeader">
				<Link href="/">
				<img
					src={img}
					alt="USA Curling logo"
					height={80}
				/>
				<b>USA CURLING</b>
				</Link>
			</div>
			<ul class="navigation">
				{
				
				PAGES.map((page) => {
					return (
						<li><Link href={page.link} activeStyle={{fontWeight: 'bold'}}>{page.name}</Link></li>
					);
				})}
			</ul>

			<select>
				<option>About</option>
				<option>Standings</option>
				<option>Events</option>
				<option>Streams</option>
				<option>Forms</option>
				<option>Contact</option>
				<option>Previous Years</option>
			</select>
		</nav>
	);
}
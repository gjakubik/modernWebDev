import './style';
import img from '../../images/logo.png';
import '@fontsource/audiowide';

export default function NavBar() {
	return (
		<nav class="navContainer">
			<div class="navHeader">
				<a href="index.html">
				<img
					src={img}
					alt="USA Curling logo"
					height={80}
				/>
				<b>USA CURLING</b>
				</a>
			</div>
			<ul class="navigation">
				<li><a href="about/index.html">About</a></li>
				<li><a href="standings/index.html">Standings</a></li>
				<li><a href="events/index.html">Events</a></li>
				<li><a href="streams/index.html">Streams</a></li>
				<li><a href="forms/index.html">Forms</a></li>
				<li><a href="contact/index.html">Contact</a></li>
				<li><a href="previous_years/index.html">Previous Years</a></li>
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
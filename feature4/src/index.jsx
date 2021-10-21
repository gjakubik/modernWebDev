import './style';
import Router from 'preact-router';

import NavBar from './components/NavBar';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import StandingsView from './components/StandingsView';
import EventsView from './components/EventsView';
import StreamsView from './components/StreamsView';
import FormsView from './components/FormsView';
import ContactView from './components/ContactView';
import PrevYearsView from './components/PrevYearsView';

export default function App() {
	return (
		<div>
			<NavBar />
			<Router>
				{/* TODO: Wrap in div styled to constant height */}
				<HomeView path="/" />
				<AboutView path="/about" />
				<StandingsView path="/standings" />
				<EventsView path="/events" />
				<StreamsView path="/streams" />
				<FormsView path="/forms" />
				<ContactView path="/contact" />
				<PrevYearsView path="/prevYears" />
			</Router>
			{/* TODO: Create and add footer */}
		</div>
	);
}

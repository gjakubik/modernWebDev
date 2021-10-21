import './style';
import Router from 'preact-router';
import Parse from 'parse';

import { PARSE_APP_ID, PARSE_HOST_URL, PARSE_JS_KEY } from './constants';

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

	Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);
	Parse.serverURL = PARSE_HOST_URL;

	(async () => {
		const Schools = Parse.Object.extend('Schools');
		const query = new Parse.Query(Schools);
		// You can also query by using a parameter of an object
		// query.equalTo('objectId', 'xKue915KBG');
		//const results = await query.find();
		try {
		  const results = await query.find();
		  for (const object of results) {
			// Access the Parse Object attributes using the .GET method
			const schoolName = object.get('schoolName')
			const schoolLocation = object.get('schoolLocation')
			console.log(schoolName);
			console.log(schoolLocation);
		  }
		} catch (error) {
		  console.error('Error while fetching Schools', error);
		}
	  })();

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

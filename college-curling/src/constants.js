/*
* File containing constant values used throughout the application
*/
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InfoIcon        from '@mui/icons-material/Info';
import EventIcon       from '@mui/icons-material/Event';
import ComputerIcon    from '@mui/icons-material/Computer';
import ListAltIcon     from '@mui/icons-material/ListAlt';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccessTimeIcon  from '@mui/icons-material/AccessTime';
import GroupAddIcon    from '@mui/icons-material/GroupAdd';

import AboutView     from "./components/AboutView";
import StandingsView from "./components/StandingsView";
import EventsView    from "./components/EventsView";
import StreamsView   from "./components/StreamsView";
import FormsView     from "./components/FormsView";
import ContactView   from "./components/ContactView";
import PrevYearsView from "./components/PrevYearsView";
import AddTeamView   from './components/AddTeamView';
import AddSchoolView   from './components/AddSchoolView';


const REST_API_KEY = "XpDK1Zm5r0cX3bZKiuPrsqdTbzXOBSin3YKcb5hR";

const BASE_URL = "https://reqres.in/api";

const PARSE_APP_ID   = 'LQXEYSgyvBYjP9pJfVfvr8XxflonqIDBFboNSbYh';
const PARSE_JS_KEY   = 'C9Y9dYHQnKqWDH53UybE1JLl0zM4JS2NsqEUrjIE';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';

// List of objects used to create nav links to correct routes
const PUBLIC_PAGES = [
    {
        id: 'about',
        name: 'About',
        link: '/about',
        icon: <InfoIcon />,
        component: <AboutView />
    },
    {
        id: 'standings',
        name: 'Standings',
        link: '/standings',
        icon: <EmojiEventsIcon />,
        component: <StandingsView />
    },
    {
        id: 'events',
        name: 'Events',
        link: '/events',
        icon: <EventIcon />,
        component: <EventsView />
    },
    {
        id: 'streams',
        name: 'Streams',
        link: '/streams',
        icon: <ComputerIcon />,
        component: <StreamsView />
    },
    {
        id: 'forms',
        name: 'Forms',
        link: '/forms',
        icon: <ListAltIcon />,
        component: <FormsView />
    },
    {
        id: 'contact',
        name: 'Contact',
        link: '/contact',
        icon: <ContactMailIcon />,
        component: <ContactView />
    },
    {
        id: 'prevYears',
        name: 'Previous Years',
        link: '/prevYears',
        icon: <AccessTimeIcon />,
        component: <PrevYearsView />
    },
];

const PRIVATE_PAGES = [
  {
    id: 'addTeam',
    name: 'Add Team',
    link: '/addTeam',
    icon: <GroupAddIcon />,
    component: AddTeamView
  },  
  {
    id: 'addSchool',
    name: 'Add School',
    link: '/addSchool',
    icon: <GroupAddIcon />,
    component: AddSchoolView
  },
];

const SCHOOLS = {
    "results" : [
      {
        "objectId": "bgf5Mp7tnZ",
        "schoolName": "University of Mclaughlin",
        "schoolLocation": "Levant, Louisiana",
        "createdAt": "2021-10-06T06:13:52.993Z",
        "updatedAt": "2021-10-06T06:13:52.993Z"
      },
      {
        "objectId": "4sEQRjGJpE",
        "schoolName": "University of Wells",
        "schoolLocation": "Springville, Virginia",
        "createdAt": "2021-10-06T06:13:52.993Z",
        "updatedAt": "2021-10-06T06:13:52.993Z"
      },
      {
        "objectId": "KmERYuUGsE",
        "schoolName": "University of Morse",
        "schoolLocation": "Norris, Colorado",
        "createdAt": "2021-10-06T06:13:52.993Z",
        "updatedAt": "2021-10-06T06:13:52.993Z"
      },
      {
        "objectId": "BQ1LahnYHP",
        "schoolName": "University of Farrell",
        "schoolLocation": "Groton, California",
        "createdAt": "2021-10-06T06:13:52.993Z",
        "updatedAt": "2021-10-06T06:13:52.993Z"
      },
      {
        "objectId": "SB4o7lU84Y",
        "schoolName": "University of Mccray",
        "schoolLocation": "Dalton, Minnesota",
        "createdAt": "2021-10-06T06:13:52.993Z",
        "updatedAt": "2021-10-06T06:13:52.993Z"
      },
      {
        "objectId": "BzhFvAaHlM",
        "schoolName": "University of Weiss",
        "schoolLocation": "Edmund, Washington",
        "createdAt": "2021-10-06T06:13:52.993Z",
        "updatedAt": "2021-10-06T06:13:52.993Z"
      },
      {
        "objectId": "G9BUWXRm7H",
        "schoolName": "University of Alvarado",
        "schoolLocation": "Comptche, Kentucky",
        "createdAt": "2021-10-06T06:13:52.993Z",
        "updatedAt": "2021-10-06T06:13:52.993Z"
      },
      {
        "objectId": "PrwGFdnama",
        "schoolName": "University of Fuller",
        "schoolLocation": "Farmers, Montana",
        "createdAt": "2021-10-06T06:13:52.993Z",
        "updatedAt": "2021-10-06T06:13:52.993Z"
      },
      {
        "objectId": "bbObo09HiD",
        "schoolName": "University of Morrow",
        "schoolLocation": "Watrous, West Virginia",
        "createdAt": "2021-10-06T06:13:52.993Z",
        "updatedAt": "2021-10-06T06:13:52.993Z"
      },
      {
        "objectId": "tmDV5ChJCG",
        "schoolName": "University of Lester",
        "schoolLocation": "Gardners, Iowa",
        "createdAt": "2021-10-06T06:13:52.993Z",
        "updatedAt": "2021-10-06T06:13:52.993Z"
      }
    ]
};

export { PUBLIC_PAGES, PRIVATE_PAGES, PARSE_APP_ID, PARSE_HOST_URL, PARSE_JS_KEY, BASE_URL, REST_API_KEY, SCHOOLS};

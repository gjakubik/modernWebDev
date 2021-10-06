/*
* File containing constant values used throughout the application
*/

// List of objects used to create nav links to correct routes
const PAGES = [
    {
        id: 'about',
        name: 'About',
        link: '/about'
    },
    {
        id: 'standings',
        name: 'Standings',
        link: '/standings'
    },
    {
        id: 'events',
        name: 'Events',
        link: '/events'
    },
    {
        id: 'streams',
        name: 'Streams',
        link: '/streams'
    },
    {
        id: 'forms',
        name: 'Forms',
        link: '/forms'
    },
    {
        id: 'contact',
        name: 'Contact',
        link: '/contact'
    },
    {
        id: 'prevYears',
        name: 'Previous Years',
        link: '/prevYears'
    },
];

const PARSE_APP_ID   = 'LQXEYSgyvBYjP9pJfVfvr8XxflonqIDBFboNSbYh';
const PARSE_JS_KEY   = 'C9Y9dYHQnKqWDH53UybE1JLl0zM4JS2NsqEUrjIE';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';

export { PAGES, PARSE_APP_ID, PARSE_HOST_URL, PARSE_JS_KEY };
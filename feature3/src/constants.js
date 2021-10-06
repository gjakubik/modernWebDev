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

//const BASE_URL = "https://parseapi.back4app.com/";

const BASE_URL = "https://reqres.in/api";

const REST_API_KEY = "XpDK1Zm5r0cX3bZKiuPrsqdTbzXOBSin3YKcb5hR";

export { PAGES, BASE_URL, REST_API_KEY };
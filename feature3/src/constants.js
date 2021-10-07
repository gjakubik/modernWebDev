/*
* File containing constant values used throughout the application
*/
const REST_API_KEY = "XpDK1Zm5r0cX3bZKiuPrsqdTbzXOBSin3YKcb5hR";

const BASE_URL = "https://reqres.in/api";

const PARSE_APP_ID   = 'LQXEYSgyvBYjP9pJfVfvr8XxflonqIDBFboNSbYh';
const PARSE_JS_KEY   = 'C9Y9dYHQnKqWDH53UybE1JLl0zM4JS2NsqEUrjIE';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';

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

export { PAGES, PARSE_APP_ID, PARSE_HOST_URL, PARSE_JS_KEY, BASE_URL, REST_API_KEY, SCHOOLS};

import React                from "react";
import CssBaseline          from '@mui/material/CssBaseline';
import Parse                from 'parse';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns       from '@mui/lab/AdapterDateFns';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import NavBar   from "./components/NavBar";
import HomeView from "./components/HomeView";

import { 
    PRIVATE_PAGES, 
    PUBLIC_PAGES, 
    PARSE_APP_ID, 
    PARSE_JS_KEY, 
    PARSE_HOST_URL } from "./constants";

const App = () => {

    Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);
	Parse.serverURL = PARSE_HOST_URL;

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Router>
                <CssBaseline />
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomeView} />
                    {PUBLIC_PAGES.map((page) => (<Route path={page.link}>{page.component}</Route>))}
                    {PRIVATE_PAGES.map((page) => (<Route path={page.link}>{page.component}</Route>))}
                </Switch>
            </Router>
        </LocalizationProvider>
    );
}

export default App;
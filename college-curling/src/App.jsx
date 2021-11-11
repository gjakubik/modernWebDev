import React                from "react";
import CssBaseline          from '@mui/material/CssBaseline';
import Parse                from 'parse';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns       from '@mui/lab/AdapterDateFns';
import { RecoilRoot }       from 'recoil';
import {
    BrowserRouter as Router,
    Switch,
    Route }                 from "react-router-dom";

import NavBar         from "./components/NavBar";
import HomeView       from "./components/HomeView";
import LoginView      from "./components/LoginView";
import RegisterView   from "./components/RegisterView";
import ResetView      from "./components/ResetView";
import ProtectedRoute from "./components/Common/ProtectedRoute";

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
        <RecoilRoot>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Router>
                    <CssBaseline />
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={HomeView} />
                        <Route path="/login" component={LoginView} />
                        <Route path="/register" component={RegisterView} />
                        <Route path="/reset" component={ResetView} />
                        {PUBLIC_PAGES.map((page) => (<Route key={page.name} path={page.link}>{page.component}</Route>))}
                        {PRIVATE_PAGES.map((page) => (<ProtectedRoute key={page.name} path={page.link} component={page.component} />))}
                    </Switch>
                </Router>
            </LocalizationProvider>
        </RecoilRoot>
    );
}

export default App;
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
  } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomeView from "./components/HomeView";

import { PAGES } from "./constants";

const App = () => {

    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomeView} />
                {PAGES.map((page) => (<Route path={page.link}>{page.component}</Route>))}
                
            </Switch>
        </Router>
    );
}

export default App;
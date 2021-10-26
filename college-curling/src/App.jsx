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

    const [showNav, setShowNav] = useState(false);
	const history = useHistory();

    const changeView = (link) => {
		console.log("pushing: ", link);
        if (link) {
            history.push(link);
        }
	};

    return (
        <Router>
            <NavBar showNav={showNav} setShowNav={setShowNav} changeView={changeView}/>
            <Switch>
                <Route exact path="/" component={HomeView} />
                {PAGES.map((page) => (<Route path={page.link}>{page.component}</Route>))}
                
            </Switch>
        </Router>
    );
}

export default App;
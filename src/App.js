import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//Page Import
import HomePage from "./Pages/HomePage.js";
import AboutUs from "./Pages/AboutUs.js";
import Cerdikiwan from "./Pages/Cerdikiawan.js";
import NotFound from "./Pages/NotFound.js";

//Component Import
import Navbar from "./Component/Navbar.js";
import Footer from "./Component/Footer.js";

//Style Set
import './App.css';

function App() {
  return (
    <React.Fragment className="App">
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/aboutus" exact component={AboutUs}/>
        <Route path="/cerdikiawan" exact component={Cerdikiwan}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </Router>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Project from "./Projects";
import Contact from "./Contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/AboutMe" component={AboutMe} />
    <Route path="/Resume" component={Resume} />
    <Route path="/Projects" component={Project} />
    <Route path="/Contact" component={Contact} />
  </Switch>
);
export default Main;

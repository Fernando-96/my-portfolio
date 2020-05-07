import React from "react";
import "./App.css";

import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Fernando" fixed>
          <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/AboutMe">About Me</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer className="drawer-color" title="Close">
          <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/AboutMe">About Me</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;

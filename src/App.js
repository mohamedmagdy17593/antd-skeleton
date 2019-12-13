import "./App.less";

import React from "react";
import { Button } from "antd";
import { Route, BrowserRouter, NavLink, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <hr></hr>
        <nav>
          <NavLink component={Button} to="/" exact type="primary">
            Home
          </NavLink>{" "}
          <NavLink component={Button} to="/about" type="primary">
            About
          </NavLink>
        </nav>
        <hr></hr>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

export default App;

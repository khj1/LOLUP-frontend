import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/fragments/Header";
import Footer from "./components/fragments/Footer";
import Auth from './hoc/auth';
import Duo from "./components/views/Duo";
import Team from "./components/views/Team"
import Login01 from "./components/views/Login01";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Auth(Duo, null)} />
        <Route exact path="/duo" component={Auth(Duo, null)} />
        <Route exact path="/team" component={Auth(Team, null)} />
        <Route exact path="/login" component={Auth(Login01, false)} />
      </Switch>
    </Router>
  );
}

export default App;

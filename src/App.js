import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/fragments/Header";
import Footer from "./components/fragments/Footer";
import Auth from './hoc/auth';
import Home from "./components/views/Home";
import Duo from "./components/views/Duo";
import Team from "./components/views/Team"
import Login01 from "./components/views/Login01";
import Logout from  "./components/views/Logout";
import Oauth2Handler from "./components/views/Oauth2Handler";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/duo" component={Auth(Duo, null)} />
        <Route exact path="/team" component={Auth(Team, null)} />
        <Route exact path="/login" component={Auth(Login01, false)} />
        <Route exact path="/logout" component={Auth(Logout, true)} />
        <Route path="/oauth2/login" component={Oauth2Handler} />
      </Switch>
    </Router>
  );
}

export default App;

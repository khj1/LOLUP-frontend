import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/fragments/Header";
import Footer from "./components/fragments/Footer";
import Auth from './hoc/auth';
import Home from "./components/views/Home";
import Duo from "./components/views/Duo";
import Logout from  "./components/views/Logout";
import Oauth2Handler from "./components/views/Oauth2Handler";
import "./App.css";
import LoginModal from "./components/views/LoginModal";
import NameModal from "./components/views/NameModal";
import AddModal from "./components/views/AddModal";
import ChatTest from "./utils/ChatTest";

function App() {
  return (
    <Router>
      
        <Header />
        <LoginModal />
        <NameModal />
        <AddModal />
        
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat_test" component={ChatTest} />
        <Route exact path="/duo" component={Auth(Duo, null)} />
        <Route exact path="/logout" component={Auth(Logout, true)} />
        <Route path="/oauth2/login" component={Oauth2Handler} />
        </Switch>

        <Footer />
        
    </Router>
  );
}

export default App

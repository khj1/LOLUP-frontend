import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/fragments/Header";
import Footer from "./components/fragments/Footer";
import Auth from './hoc/auth';
import Duo from "./components/views/Duo";
import Logout from  "./components/views/Logout";
import Oauth2Handler from "./components/views/Oauth2Handler";
import "./App.css";
import LoginModal from "./components/views/LoginModal";
import NameModal from "./components/views/NameModal";
import AddModal from "./components/views/AddModal";

function App() {
  return (
    <Router>
      
        <Header />
        <LoginModal />
        <NameModal />
        <AddModal />
        
        <Switch>
          <Route exact path="/logout" component={Auth(Logout, true)} />
          <Route path="/oauth2/login" component={Oauth2Handler} />
          <Route path="/**" component={Auth(Duo, null)} />
        </Switch>

        <Footer />
        
    </Router>
  );
}

export default App

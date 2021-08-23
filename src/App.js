import React, { Fragment } from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Duo from "./routes/Duo";
import FreeRank from "./routes/FreeRank";
import Login01 from "./components/Login01";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <>
        <Header />
        <Route path="/" exact={true} component={Home} />
        <Route path="/duo" exact={true} component={Duo} />
        <Route path="/freeRank" exact={true} component={FreeRank} />
      </>
      <Route path="/login" exact={true} component={Login01} />
      {/*<button onClick={() => window.open('/login', '_self')}>[로그인]</button>*/}
    </HashRouter>
  );
}

export default App;

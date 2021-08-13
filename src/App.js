import React, { Component } from "react";
import FadeIn from "react-fade-in";
import "./App.css";
import Login from "./component/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FadeIn delay="700" transitionDuration="1000">
          <Login />
        </FadeIn>
      </div>
    );
  }
}

export default App;

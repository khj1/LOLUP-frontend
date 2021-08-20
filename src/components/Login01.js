import React, { Component } from "react";
import FadeIn from "react-fade-in";
import "./Login01.css";
import Login02 from "./Login02";

class Login01 extends Component {
  render() {
    return (
      <div className="App">
        <FadeIn delay="700" transitionDuration="1000">
          <Login02 />
        </FadeIn>
      </div>
    );
  }
}

export default Login01;

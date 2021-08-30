import React, { Component } from "react";
import FadeIn from "react-fade-in";
import "../../css/Login01.css";
import Login02 from "./Login02";

class Login01 extends Component {
  render() {
    return (
        <div className="loginContainer">
            <FadeIn delay="200" transitionDuration="800">
                <Login02 />
            </FadeIn>
        </div>
    );
  }
}

export default Login01;

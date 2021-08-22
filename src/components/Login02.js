import { Button, Grid, Paper } from "@material-ui/core";
import React, { Component } from "react";
import GoogleButton from "./GoogleButton";
import "./Login02.css";
import NaverLogin from "./NaverLogin";
import KakaoLogin from "./KakaoLogin";

class Login02 extends Component {
  render() {
    const paperStyle = {
      padding: 30,
      height: "35vh",
      width: 300,
      margin: "auto",
    };

    const kakaoBtnStyle = {
      margin: "5px 0",
    };

    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h1 className="logo">
              LOL<span>UP</span>
            </h1>
          </Grid>
          <form>
            <div className="buttonStyle">
              <KakaoLogin />
              <GoogleButton />
              <NaverLogin />
            </div>
          </form>
        </Paper>
      </Grid>
    );
  }
}

export default Login02;

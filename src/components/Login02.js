import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "./Login02.css";

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

    const googleBtnStyle = {
      margin: "5px 0 20px 0",
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={kakaoBtnStyle}
              fullWidth
            >
              Sign in with KAKAO
            </Button>

            <Typography align="center">or</Typography>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={googleBtnStyle}
              fullWidth
            >
              Sign in with Google
            </Button>
          </form>
        </Paper>
      </Grid>
    );
  }
}

export default Login02;

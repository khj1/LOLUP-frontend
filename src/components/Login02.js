import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Link,
  Typography,
  Icon,
} from "@material-ui/core";
import React, { Component } from "react";
import "./Login02.css";

class Login02 extends Component {
  render() {
    const paperStyle = {
      padding: 30,
      height: "60vh",
      width: 400,
      margin: "50 auto",
    };

    const btnStyle = {
      margin: "20px 0 5px 0",
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
            <TextField
              id="id"
              label="ID"
              placeholder="Enter User ID"
              fullWidth
              required
            />
            <TextField
              id="pw"
              label="Password"
              placeholder="Enter User Password"
              type="password"
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={btnStyle}
              fullWidth
            >
              Sign in
            </Button>
            <Typography align="center">or</Typography>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={kakaoBtnStyle}
              fullWidth
            >
              Sign in with KAKAO
            </Button>
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
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default Login02;

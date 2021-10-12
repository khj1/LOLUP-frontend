import { Grid, Paper } from "@material-ui/core";
import React from "react";
import GoogleLogin from '../buttons/GoogleLogin'
import KakaoLogin from '../buttons/KakaoLogin'
import "../../css/Login02.css";

function LoginForm() {

    return (
        <Grid className="grid">
            <Paper elevation={10} style={paperStyle} onClick={e => e.stopPropagation() }>
                <Grid align="center">
                    <h1 className="logo">
                        LOL<span>UP</span>
                    </h1>
                </Grid>
                <KakaoLogin />
                <GoogleLogin />
            </Paper>
        </Grid>
    );
}

const paperStyle = {
    width: 440,
    padding: 30,
    height: "400px",
    margin: "auto",
};

export default LoginForm;

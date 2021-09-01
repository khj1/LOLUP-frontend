import React, { Component } from "react";
import FadeIn from "react-fade-in";
import { useDispatch } from "react-redux";
import "../../css/Login01.css";
import { loginModalOff } from "../../_actions/userAction";
import Login02 from "./Login02";

function Login01(){
    const dispatch = useDispatch();
    const closeLoginModal = () => {
        dispatch(loginModalOff());
    }

    return (
        <div className="loginContainer" onClick={() => closeLoginModal()}>
            <FadeIn delay="20" transitionDuration="400">
                <Login02/>
            </FadeIn>
        </div>
    );
};

export default Login01;

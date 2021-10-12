import React from "react";
import FadeIn from "react-fade-in";
import { useDispatch } from "react-redux";
import "../../css/Login01.css";
import { loginModalOff } from "../../_actions/userAction";
import LoginForm from "./LoginForm";

function LoginFormWrapper(){
    const dispatch = useDispatch();
    const closeLoginModal = () => {
        dispatch(loginModalOff());
    }

    return (
        <div className="loginContainer" onClick={() => closeLoginModal()}>
            <FadeIn delay="20" transitionDuration="400">
                <LoginForm/>
            </FadeIn>
        </div>
    );
};

export default LoginFormWrapper;

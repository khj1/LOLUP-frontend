import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import "../../css/Header.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Sidemenu from "./Sidemenu";
import { Button } from "react-bootstrap";
import { loginModalOff, loginModalOn } from "../../_actions/userAction";

function Header(props) {
    const dispatch = useDispatch();

    const popupLoginModal = () => {
        if(props.isOn){
            dispatch(loginModalOff());
        } else {
            dispatch(loginModalOn());
        }
    }
    
    let loginOrLogout;
    if(props.isAuth){
        loginOrLogout = 
            <Button className="btn" variant="primary" href="/logout">
                로그아웃
            </Button>

    } else if(props.isAuth === false) {
        loginOrLogout = 
            <Button className="btn" variant="primary" onClick={() => popupLoginModal()}>
                로그인
            </Button>
    }

    return (
        <div className="nav" id="outer-container">
            <Link className="nav_logo_wrapper" to="/">
                <h1 className="nav__logo">
                    LOL<span>UP</span>
                </h1>
            </Link>

            <ul className="menu-list">
                <li>
                    {loginOrLogout}
                </li>
            </ul>

            {/* <Sidemenu outerContainerId={"outer-container"} /> */}
        </div>
    );  
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.authorized,
        isOn: state.loginModal.isOn
    }
}

export default connect(mapStateToProps)(Header);

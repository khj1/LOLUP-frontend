import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import "../../css/Header.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Button } from "react-bootstrap";
import { loginModalOff, loginModalOn, nameModalOff, nameModalOn } from "../../_actions/userAction";

function Header(props) {
    const summonerName = localStorage.getItem("summonerName");
    const dispatch = useDispatch();

    const popupLoginModal = () => {
        if( props.loginModalIsOn){
            dispatch(loginModalOff());
        } else {
            dispatch(loginModalOn());
        }
    }

    const popupNameModal = () => {
        if(props.nameModalIsOn && summonerName != "" ){
            dispatch(nameModalOff());
        } else {
            dispatch(nameModalOn());
        }
    }
    
    let nameModalBtn;
    let loginOrLogout;
    if(props.isAuth){
        nameModalBtn = 
            <Button variant="success" onClick={() => {popupNameModal()}}>소환사 이름 변경하기</Button>;
        
        loginOrLogout = 
            <Button className="btn" variant="primary" href="/logout">
                로그아웃
            </Button>;

    } else if(props.isAuth === false) {
        nameModalBtn = "";
        loginOrLogout = 
            <Button className="btn" variant="primary" onClick={() => popupLoginModal()}>
                로그인
            </Button>;
    }

    return (
        <div className="nav" id="outer-container">
            <Link className="nav_logo_wrapper" to="/">
                <h1 className="nav__logo">
                    LOL<span>UP</span>
                </h1>
            </Link>
            <div>
                {nameModalBtn} {loginOrLogout} 
            </div>
        </div>
    );  
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.authorized,
        loginModalIsOn: state.loginModal.isOn,
        nameModalIsOn: state.nameModal.isOn
    }
}

export default connect(mapStateToProps)(Header);

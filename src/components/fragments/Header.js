import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import "../../css/Header.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Button } from "react-bootstrap";
import { 
    loginModalOff, loginModalOn, 
    nameModalOff, nameModalOn, 
    addModalOff, addModalOn 
} from "../../_actions/userAction";

function Header(props) {
    const summonerName = localStorage.getItem("summonerName");
    const dispatch = useDispatch();

    const popupAddModal = () => {
        if( props.addModalIsOn){
            dispatch(addModalOff());
        } else {
            dispatch(addModalOn());
            dispatch(nameModalOff());
        }
    }
    
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
            dispatch(addModalOff());
            dispatch(nameModalOn());
        }
    }
    
    let addDuoBtn;
    let nameModalBtn;
    let loginOrLogout;
    if(props.isAuth){
        addDuoBtn =
        <Button className="header_btn" variant="success" onClick={() => {popupAddModal()}}>
            등록하기
        </Button>;

        nameModalBtn = 
            <Button className="header_btn" variant="success" onClick={() => {popupNameModal()}}>
                소환사 이름 변경하기
            </Button>;
        
        loginOrLogout = 
            <Button className="header_btn" variant="light" href="/logout">
                로그아웃
            </Button>;

    } else if(props.isAuth === false) {
        nameModalBtn = "";
        loginOrLogout = 
            <Button className="header_btn" variant="light" onClick={() => popupLoginModal()}>
                로그인
            </Button>;
    }

    return (
        <div className="nav" id="outer-container">
            <Link className="logo_wrapper" to="/">
                <h1 className="nav__logo">
                    <span className="LOL">LOL</span> 
                    <span className="UP">UP</span>
                </h1>
            </Link>
            <div className="button_div">
               {addDuoBtn} {nameModalBtn} {loginOrLogout} 
            </div>
        </div>
    );  
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.authorized,
        loginModalIsOn: state.loginModal.isOn,
        nameModalIsOn: state.nameModal.isOn,
        addModalIsOn: state.addModal.isOn
    }
}

export default connect(mapStateToProps)(Header);

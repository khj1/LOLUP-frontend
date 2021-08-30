import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../css/Header.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Sidemenu from "./Sidemenu";

function Header(props) {
    
    let loginOrLogout;
    if(props.auth){
        loginOrLogout = <Link to="/logout">로그아웃</Link>
    } else {
        loginOrLogout = <Link to="/login">로그인</Link>
    }

    return (
        <div className="nav" id="outer-container">
            <Link to="/">
                <h1 className="nav__logo">
                    LOL<span>UP</span>
                </h1>
            </Link>

            <ul className="menu-list">
                <li>
                    <Link to="/duo">듀오</Link>
                    <Link to="/team">팀</Link>
                    {loginOrLogout}
                </li>
            </ul>

            {/* <Sidemenu outerContainerId={"outer-container"} /> */}
        </div>
    );  
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.authorized
    }
}

export default connect(mapStateToProps)(Header);

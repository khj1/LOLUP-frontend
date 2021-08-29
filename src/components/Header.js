import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Sidemenu from "./Sidemenu";

function Header() {
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
          <Link to="/login">로그인</Link>
        </li>
      </ul>
      <div>
        <Sidemenu outerContainerId={"outer-container"} />
      </div>
    </div>
  );
}

export default Header;

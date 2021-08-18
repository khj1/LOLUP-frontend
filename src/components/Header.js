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

      <div className="top-search-area">
        <form>
          <TextField
            label="&nbsp;&nbsp;&nbsp;&nbsp;소환사를 검색해보세요"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>

      <ul className="menu-list">
        <li>
          <Link to="/duo">듀오</Link>
          <Link to="/freeRank">자유랭크</Link>
          <Link to="/login">로그인</Link>
        </li>
      </ul>
      <div>
        <Sidemenu outerContainerId={"outer-container"} />
      </div>

      {/* <div class="sideMenu">
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div> */}
    </div>
  );
}

export default Header;

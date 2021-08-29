import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../../css/Sidemenu.css";

export default (props) => {
  return (
    <>
      <Menu right {...props}>
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
                )
              }}
            />
          </form>
        </div>

        <Link to="/duo">듀오</Link>

        <Link to="/freeRank">팀</Link>
      </Menu>
    </>
  );
};

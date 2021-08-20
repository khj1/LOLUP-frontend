import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidemenu.css";

export default (props) => {
  return (
    <Menu right {...props}>
      <a className="menu-item" href="/">
        팀
      </a>

      <a className="menu-item" href="/about">
        친구
      </a>
    </Menu>
  );
};

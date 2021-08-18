import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidemenu.css";

export default (props) => {
  return (
    <Menu right {...props}>
      <a className="menu-item" href="/">
        듀오
      </a>

      <a className="menu-item" href="/about">
        팀
      </a>
    </Menu>
  );
};

import 'bootstrap/dist/css/bootstrap.min.css'; 
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'bootstrap';
import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidemenu.css";

export default (props) => {
  return (
    <Menu right {...props}>
      <a className="menu-item" href="/about">팀</a>

      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item>Action1</Dropdown.Item>
        <Dropdown.Item>Action2</Dropdown.Item>
        <Dropdown.Item>Action3</Dropdown.Item>
      </DropdownButton>
 
      <a className="menu-item" href="/about">친구</a>
    </Menu>
  );
};

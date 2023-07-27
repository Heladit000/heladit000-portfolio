import React from "react";

import Logo from "@images/logo.png";

import Menu from "./icons/menu.svg";
import "./style/header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left-panel">
        <a href="#">
          <img src={Logo} alt="logo" className="header__left-panel--image" />
        </a>
        <a href="#" className="header__left-panel--resumed-button">
          Resumed version
        </a>
      </div>

      <ul className="header__menu">
        <li className="header__menu--option">
          <a href=".About" className="header__menu--option--link">
            About
          </a>
        </li>
        <li className="header__menu--option">
          <a href=".About" className="header__menu--option--link">
            Projects
          </a>
        </li>
        <li className="header__menu--option">
          <a href=".About" className="header__menu--option--link">
            Skills
          </a>
        </li>
        <li className="header__menu--option">
          <a href=".About" className="header__menu--option--link">
            Service
          </a>
        </li>
        <li className="header__menu--option">
          <a href=".About" className="header__menu--option--link">
            Education
          </a>
        </li>
        <li className="header__menu--option">
          <a href=".About" className="header__menu--option--link">
            Experience
          </a>
        </li>
        <li className="header__menu--option">
          <a href=".About" className="header__menu--option--link">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;

import React from "react";
import headerLogo from "../../images/GirShades-LookRight_small.png";
import "./Header.css";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <div className="header">
      <div className="header_left-side">
        <img
          alt="OhMyTallest Productions"
          className="header__logo"
          src={headerLogo}
        />
        <h1 className="header__header">OhMyTallest Productions</h1>
      </div>
      <NavBar />

    </div>
  );
}

export default Header;
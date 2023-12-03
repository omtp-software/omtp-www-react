import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="menu">
            <NavLink exact to="/" className="menu__link">
                Home
            </NavLink>
            <NavLink to="/about-us" className="menu__link">
                About Us
            </NavLink>
            <NavLink to="/about-me" className="menu__link">
                About Me
            </NavLink>
        </nav>
    );
}

export default NavBar;

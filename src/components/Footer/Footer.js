import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p className="footer__back-link">
          click{" "}
          <Link exact to="/" className="menu__link">
            here
          </Link>{" "}
          to go back home
        </p>
      </div>
      <div>
        <p className="footer__copyright">
          All site contents, unless otherwise stated, are copyright © 2009-2024,
          Jerry W Jackson - all rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

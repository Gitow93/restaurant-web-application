import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/welkhome-logo.png";
import singInLogo from "../assets/images/singin-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img className="logo" src={logo} alt={logo} />
      </div>
      <Link to="/registration">
        <img className="sn_logo" src={singInLogo} alt={singInLogo} />
      </Link>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/welkhome-logo.png";
import signInLogo from "../assets/images/signin-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img className="logo" src={logo} alt={"logo de empresa"} />
      </div>
      <Link to="/registration">
        <img
          className="sn_logo"
          src={signInLogo}
          alt={"logo inicio de sesión"}
        />
      </Link>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/footer.scss";
import logo from "../assets/images/welkhome-logo.png";
import instalogo from "../assets/images/insta-logo.png";
import fcblogo from "../assets/images/faceb-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img className="logo" src={logo} alt={"logo de empresa"} />
      </div>
      <div className="sn_container">
        <Link to="https://www.instagram.com/welkhomeclub/">
          <img className="sn_logo" src={instalogo} alt={"logo de instagram"} />
        </Link>
        <Link to="https://es-la.facebook.com/WELKHOMEclub/">
          <img className="sn_logo" src={fcblogo} alt={"logo de facebook"} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

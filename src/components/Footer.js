import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/footer.scss";
import logo from "../assets/images/welkhome-logo.png";
import instalogo from "../assets/images/insta-logo.png";


const Footer = () => {
    return (

        <header className="footer">
            <div>
                <img className="logo" src={logo} alt={logo} />
            </div>
            <Link to="https://www.instagram.com/welkhomeclub/">
            <img className="sn_logo" src={instalogo} alt={instalogo} />
            </Link>
        </header>

    );
    };

export default Footer;
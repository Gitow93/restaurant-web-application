import React from "react";
import logo from "../assets/images/welkhome-logo.png";


const Header = () => {
    return (

        <header className="header">
            <div>
                <img className="logo" src={logo} alt={logo} />
            </div>
        </header>

    );
    };

export default Header;
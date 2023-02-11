import React from "react";
import logo from "../../assets/logo.svg";

export const NavBar = () => {
    return (
        <header className="header">
            <nav>
                <img src={logo} alt="image here" className="logo"/>
                <h3 className="logo-text">Forms</h3>
            </nav>
        </header>
    );
};

import React from "react";
import logo from "../../assets/logo.svg";

export const NavBar = () => {
    return (
        <header className="header">
            <nav>
                <img src={logo} alt="image here"/>
                <h3 className="logo-text">My Travel Journal</h3>
            </nav>
        </header>
    );
};

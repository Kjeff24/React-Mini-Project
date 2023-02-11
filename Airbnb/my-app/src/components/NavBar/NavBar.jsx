import React from "react";
import logo from "../../assets/logo.svg";

export const NavBar = () => {
    return (
        <header className='header'>
            <nav>
                <img src={logo} alt="image here"/>
            </nav>
        </header>
    );
};

import React from 'react';
import '../css/header.css';
import homeIcon from '../img/home.ico';
import { Link } from "react-router-dom";
function Header() {

    return (
        <header>
            <Link to='/financial-advisor'><img id="top-logo" alt="home-icon" src={homeIcon}></img></Link>
            <div id="app-title">
                Financial Advisor
            </div>
        </header>
    );
}

export default Header;

import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';

function Nav() {
    return (
        <nav>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <ul className='links'>
                <li><Link to="/">00 Home</Link></li>
                <li><Link to="/DestinationPage">01 Destination</Link></li>
                <li><Link to="/Crew">02 Crew</Link></li>
                <li><Link to="/Technology">03 Technology</Link></li>
                {/**<Link to="/Moon">Moon</Link> |{" "}
                <Link to="/Mars">Mars</Link> */}
            </ul>
            <div className="hamburger">
                <img src={hamburger} alt="" />
            </div>
        </nav>
    )
}

export default Nav

import React, { useState } from 'react';
import './Nav.css';
import { Link } from "react-router-dom";
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg'

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const changeNavOpen = (state) => {
        setIsNavOpen(!state)
    }

    return (
        <nav>
            <div className="line"></div>
            <div className='logo'>
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <ul className={'links '.concat(isNavOpen ? 'nav-open' : '')}>
                <li><Link to="/" ><span className='link-numbers'>00</span> Home</Link></li>
                <li><Link to="/Destination"><span className='link-numbers'>01</span> Destination</Link></li>
                <li><Link to="/Crew"><span className='link-numbers'>02</span> Crew</Link></li>
                <li><Link to="/Technology"><span className='link-numbers'>03</span> Technology</Link></li>
            </ul>
            <div className="hamburger" onClick={() =>changeNavOpen(isNavOpen)}>
                {
                    isNavOpen === true ?  <img src={close} alt="" /> : <img src={hamburger} alt="" />
                }
            </div>
        </nav>
    )
}

export default Nav

import React from 'react';
import logo from '../images/logo.svg';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import { useState } from 'react';

export default function Navbar() {
  const [isToggled, setToggle]=useState(false);
  const handleToggle=()=>{
    setToggle(!isToggled);
  };
  return (
    <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <a href="index.html" className="nav-logo">
                    <img src={logo} alt="logo"/>
                </a>
                <button onClick={handleToggle} className="nav-toggle" id="nav-toggle" type="button"><i className="fas fa-bars"></i></button>
            </div>
            <PageLinks groupClass={isToggled ? "nav-links show-links" : "nav-links"} itemClass="nav-link" nav_id="nav-links" />
            <SocialLinks groupClass="nav-icons" itemClass="nav-icon" />
        </div>
    </nav>
  )
}

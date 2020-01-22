import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import './NavbarHeader.css';


const Navbar = () => {
    return (
        <div className="Navbar">
            <ul className="navbarFlex">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Projects/Projecter">Projects</Link></li>
                <li><Link to="/AboutMe/AboutMe">About Me</Link></li>
                <li><Link to="/Skills/Skills">Skills</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
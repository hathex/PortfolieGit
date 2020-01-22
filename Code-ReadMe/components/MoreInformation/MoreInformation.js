import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import './MoreInformation.css';

const MoreInformation = () => {
    return (
        <div className="wrapper">
            <h2 id="moreinfoHeader">More Information</h2>
            <div className="cardBox wrapper">


                <ul className="cardBox1">
                    <div className="cardText1"><Link to='/Projects/Projecter'>
                        <li id="head1">Projects</li>
                        <li><a id="section1" href="/Projects/Projecter">VIEW SECTION</a></li>
                    </Link></div>
                </ul>

                <ul className="cardBox2">
                    <ul className="cardText2"><Link to='/AboutMe/AboutMe'>
                        <li id="head2">About Me</li>
                        <li><a id="section2" href="/AboutMe/AboutMe">VIEW SECTION</a></li>
                    </Link></ul>
                </ul>

                <div className="cardBox3">
                    <ul className="cardText3"><Link to='/Skills/Skills'>
                        <li id="head3">Skills</li>
                        <li><a id="section3" href="/Skills/Skills">VIEW SECTION</a></li>
                    </Link></ul>
                </div>

            </div>
        </div>
    )
}

export default MoreInformation;
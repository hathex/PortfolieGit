import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footerwrapper">
                <ul className="me">
                    <div className="footerImgMe">
                        <img id="myImg" src="../../../img/mig.jpg" alt="" />
                        <li><h4 className="footerTextH">Martin Buhl Lauge Pedersen</h4></li></div>
                    <li><h4 className="footerTextH">Portfolie</h4></li>
                </ul>
                <ul className="myInfo">
                    <li><h4 className="footerTextH">E-mail: martin.xd@live.dk</h4></li>
                    <li><h4 className="footerTextH">Phone Number: +45 22 96 84 89</h4></li>
                </ul>
                <ul className="links">
                    <li><h4 className="footerTextH">Denmark</h4></li>
                    <li className="footerTextH"><a className="footerATag" href="https://github.com/hathex">My Github</a></li>
                    <li className="footerTextH"><a className="footerATag" href="https://www.linkedin.com/in/martin-buhl-lauge-pedersen-11a302107/">My Linkedin</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
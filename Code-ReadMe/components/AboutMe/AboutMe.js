import React from 'react';
// import Footer from '../Footer/Footer';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div id="wrapperAbout">
            <div className="AboutWrapper">
                <div className="AboutBox">
                    <h2 id="h2About">About Me</h2>
                    <div className="flexBox">
                        <ul className="ulBox">
                            <li><h4 id="textAboutHeader">Frontend Developer.</h4></li>
                            <li><h4 className="textAboutTitles">CV -</h4></li>
                            <li><h4 className="textAboutTitles">Projects -</h4></li>
                            <li><h4 className="textAboutTitles">interests -</h4></li>
                            <li><h4 className="textAboutTitles">Lorem ipsum dolor sit. -</h4></li>
                        </ul>
                        <ul className="ulBox">
                            <li><h4 className="textAbout">My name is Martin, i am 23 year old. I study web developer, at Viden Djurs school.....</h4></li>
                            <li><h4 className="textAbout">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt debitis impedit quia ex nulla vitae non. Magnam atque, quod iusto aperiam quas consequuntur corporis.</h4></li>
                            <li><h4 className="textAbout">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellendus consequatur quam facere.</h4></li>
                            <li><h4 className="textAbout">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, est?</h4></li>
                            <li><h4 className="textAbout">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat magnam praesentium ut, mollitia animi voluptates?</h4></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div >
    )
}

export default AboutMe;
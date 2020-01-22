import React from 'react';
import Header from './components/Navbar-Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import MoreInformation from './components/MoreInformation/MoreInformation';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <AboutMe />
            <MoreInformation />
            <Footer />
        </div>
    )
}

export default Home;
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Bannar from '../Bannar/Bannar';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div >
            <Navigation></Navigation>
            <Bannar></Bannar>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
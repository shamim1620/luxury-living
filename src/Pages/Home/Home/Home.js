import React from 'react';
import Services from '../../Services/Services/Services';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Bannar from '../Bannar/Bannar';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div >
            <Navigation></Navigation>
            <Bannar></Bannar>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
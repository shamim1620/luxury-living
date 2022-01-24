import React from 'react';

import Service from '../../Services/Service/Service';
import Project from '../../Projects/Project/Project';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Bannar from '../Bannar/Bannar';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div >
            <Navigation></Navigation>
            <Bannar></Bannar>
            <Project></Project>
            <Service></Service>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
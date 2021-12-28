import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Bannar from '../Bannar/Bannar';

const Home = () => {
    return (
        <div >
            <Navigation></Navigation>
            <Bannar></Bannar>
            <Footer></Footer>
        </div>
    );
};

export default Home;
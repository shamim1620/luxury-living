import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://murmuring-badlands-95403.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div >
            <Navigation></Navigation>
            <h3 className='text-center'>Our Services</h3>
            <div className="container">
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;
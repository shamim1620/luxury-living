import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

import './Service.css'

const Service = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://murmuring-badlands-95403.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container'>
            <p className='text-center mt-4'>Service</p>
            <h3 className='text-center'>We're an agency tailored to all
                <br />
                clients' needs that always delivers</h3>

            <Row xs={1} md={3} className="g-4">
                {
                    services.slice(0, 3).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </Row>
            <p className='text-center'><Link to="/services">Explore more...</Link></p>

        </div>
    );
};

export default Service;
import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container'>
            <p className='text-center mt-5'>Service</p>
            <h3 className='text-center'>We're an agency tailored to all
                <br />
                clients' needs that always delivers</h3>

            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </Row>
            <p className='text-center'><Button>Explore more</Button></p>
        </div>
    );
};

export default Services;
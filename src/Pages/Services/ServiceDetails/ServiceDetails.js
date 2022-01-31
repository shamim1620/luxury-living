import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const ServiceDetails = () => {
    const { _id } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://murmuring-badlands-95403.herokuapp.com/services/${_id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Card style={{ width: "50%" }} className='container text-center p-3 mb-5 bg-white '>
                <Card.Img variant="top" style={{ width: "50%", margin: "auto" }} src={`data:image/jpeg;base64,${service.image}`} />
                <Card.Body>
                    <Card.Title >{service.serviceTitle}</Card.Title>
                    <Card.Text className='max-lines' >
                        {service.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;
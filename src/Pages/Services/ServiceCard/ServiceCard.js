import axios from 'axios';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { user } = useAuth();
    const { _id, serviceTitle, description, image } = service;
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(`/serviceDetails/${_id}`)
    }

    const addBooking = service => {
        const bookingInfo = {
            name: user.displayName,
            email: user.email,
            serviceName: service.serviceTitle
        }


        axios.post('http://localhost:5000/orders', bookingInfo)
            .then(function (response) {
                alert("booking successful")
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <Col>
                <Card className='service-card text-center shadow p-3 mb-5 bg-white rounded'>
                    <Card.Img variant="top" src={`data:image/jpeg;base64,${image}`} />
                    <Card.Body>
                        <Card.Title >{serviceTitle}</Card.Title>
                        <Card.Text className='max-lines' >
                            {description}
                        </Card.Text>
                        <Button className='mx-4' onClick={handleOnClick} variant="primary">Explore</Button>
                        {
                            user.email && <Button className='mx-4' onClick={() => addBooking(service)}>Book</Button>
                        }
                    </Card.Body>
                </Card>
            </Col>

        </div >
    );
};

export default ServiceCard;
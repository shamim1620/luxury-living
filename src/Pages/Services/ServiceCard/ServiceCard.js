import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { _id, serviceTitle, description, image } = service;
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate(`/serviceDetails/${_id}`)
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
                        <Button onClick={handleOnClick} variant="primary">Explore</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div >
    );
};

export default ServiceCard;
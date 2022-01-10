import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { serviceTitle, description, image } = service;


    return (
        <div>
            <Col>
                <Card className='service-card text-center shadow p-3 mb-5 bg-white rounded'>
                    <Card.Img variant="top" src={`data:image/jpeg;base64,${image}`} />
                    <Card.Body>
                        <Card.Title>{serviceTitle}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default ServiceCard;
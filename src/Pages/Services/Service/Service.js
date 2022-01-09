import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { serviceTitle, description, image } = service;
    return (
        <div>

            <Col>
                <Card>
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

export default Service;
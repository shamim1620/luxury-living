import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Row>
                <Col xs={12} md={4}>
                    xs=6 md=4
                </Col>
                <Col xs={6} md={2}>
                    xs=6 md=4
                </Col>
                <Col xs={6} md={2}>
                    xs=6 md=4
                </Col>
                <Col xs={12} md={4}>
                    xs=6 md=4
                </Col>
            </Row>

        </div>
    );
};

export default Footer;
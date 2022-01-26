import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Row className='py-4'>
                <Col xs={12} md={4}>
                    xs=6 md=4
                </Col>
                <Col xs={6} md={2}>
                    <h5>Company</h5>
                    <br />
                    <a href='/about'>About</a>
                    <br />
                    <a href='/projects'>Projects</a>
                    <br />
                    <a href=''>Our Team</a>
                    <br />
                    <a href=''>Terms Aonditions</a>
                    <br />
                    <a href=''>Submit Listing</a>
                </Col>
                <Col xs={6} md={2}>
                    <h5>Quick Links</h5>
                    <br />
                    <a href=''>Quick Links</a>
                    <br />
                    <a href=''>Rentals</a>
                    <br />
                    <a href=''>Sales</a>
                    <br />
                    <a href='/contact'>Contact</a>
                    <br />
                    <a href=''>Our Blog</a>
                </Col>
                <Col xs={12} md={4}>
                    <h6>About us</h6>
                </Col>
            </Row>

            <p className='text-center'> <small>copyright luxiring living @2022.</small></p>

        </div>
    );
};

export default Footer;
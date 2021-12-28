import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import bannar_img from '../../../image/bannar_image.png';

const Bannar = () => {
    return (
        <div className='container'>

            <Row className='d-flex align-items-center text-start'>
                <Col xs={12} md={6}>
                    <h2>We Build Your Dream</h2>
                    <p>Online Easte Agency, the mordern way to sell your own home,
                        You can use Griffin Residential to market your property</p>
                    <h6><Button>Booking</Button></h6>
                </Col>
                <Col xs={12} md={6}>
                    <img className='img-fluid' src={bannar_img} alt=''></img>
                </Col>
            </Row>

        </div>
    );
};

export default Bannar;
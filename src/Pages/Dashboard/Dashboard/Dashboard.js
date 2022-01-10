import React from 'react';
import {
    Link,
    Outlet
} from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import logo from "../../../icon/company_logo.png";
import './Dashboard.css';

const Dashboard = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={3} md={3}>
                        <img className='img-fluid ' width='50%' src={logo} alt=''></img>
                        <div className='mt-5 dashboard-index'>
                            <Link to="orderList">Order List</Link>
                            <br />
                            <Link to="addService">Add Service</Link>
                            <br />
                            <Link to="makeAdmin">Make Admin</Link>
                        </div>

                    </Col>
                    <Col xs={9} md={9}>
                        <div className='dash-nav' >
                            <h4 >Order List</h4>
                        </div>
                        <div className='p-3 dashboard-bg'>
                            <div className="shadow-sm p-3 mb-5 bg-body rounded  ">
                                <Outlet />
                            </div>
                        </div>
                    </Col>

                </Row>

            </Container>

        </div>
    );
};

export default Dashboard;
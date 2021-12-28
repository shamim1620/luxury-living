import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import logo from '../../../icon/company_logo.png';

const Navigation = () => {
    return (
        <div className='container'>
            <Navbar collapseOnSelect expand="lg" >
                <Container >
                    <Navbar.Brand to="/home"><img width="50%" src={logo} alt=''></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='me-auto' >
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">Projects</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">Contact</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">Admin</Nav.Link>

                        </Nav>
                        <Nav >
                            <Nav.Link href="#deets"><Button>Login</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;
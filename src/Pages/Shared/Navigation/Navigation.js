import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../icon/company_logo.png';

const Navigation = () => {
    const { user, logOut } = useAuth();
    const { email, displayName, photoURL } = user;
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
                            <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>

                        </Nav>
                        <Nav >
                            {
                                !user.email ?
                                    <>
                                        <Nav.Link as={NavLink} to="/login"><Button>Login</Button></Nav.Link>
                                    </>
                                    :
                                    <>

                                        <NavDropdown title={<img style={{ width: "45px", borderRadius: "50%", }} src={photoURL} alt="" />
                                        }
                                        >
                                            <div className="text-center">
                                                <h6>{displayName}</h6>
                                                <p className="m-0 mb-2">{email}</p>
                                                <button onClick={logOut} className="btn btn-primary">
                                                    Sign Out
                                                </button>
                                            </div>
                                        </NavDropdown>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;
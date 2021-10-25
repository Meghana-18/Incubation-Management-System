import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Nav, NavDropdown, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Navigationbar(){

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
        <Navbar.Brand  as={Link} to="/">Incubation Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link} to="/Pricing">Pricing</Nav.Link>
            <NavDropdown title="Login" id="collasible-nav-dropdown" >
                <NavDropdown.Item as={Link} to="/StartupLogin" >As a Startup</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/MentorLogin">As a Mentor</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/AdminLogin">As an Admin</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sign Up" id="collasible-nav-dropdown">
                <NavDropdown.Item  as={Link} to="/StartupSignup">As a Startup</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/MentorSignup">As a Mentor</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Navigationbar;
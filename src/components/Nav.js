import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navb() {
    return (
        <div className="nv">
            <Navbar expand="lg" sticky="top"  className="bg-body-tertiary navv">
                <Container>
                    <Navbar.Brand href=""><h3 className="logo"><span id="cf">F</span>irebase <span id="cf">CRUD</span></h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <div className="navItem d-flex justify-content-around p-2">
                                <Nav.Link href="/users" className="navItems">USERS</Nav.Link>
                                <Nav.Link href="/" className="navItems">EMPLOYEE</Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navb;

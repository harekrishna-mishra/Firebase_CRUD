import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navb() {
    return (
        <div className="nv">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href=""><h3 className="logo">Firebase CRUD</h3></Navbar.Brand>
                    <Nav>
                        <div className="navItem d-flex justify-content-around p-2">
                            <Nav.Link href="/user">USERS</Nav.Link>
                            <Nav.Link href="/">EMPLOYEE</Nav.Link>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navb;


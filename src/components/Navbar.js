import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from "../assets/images/Logo.png";


export default function AppHeader() {

  return (
      <Navbar className="sticky-top">
          <Container>
             <img src={Logo} alt='Logo' width="40px" height="40px" /> 
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-2">
                  <Nav.Link href="#home" className='text-uppercase text-white'>Home</Nav.Link>
                  <Nav.Link href="#reasons" className='text-uppercase text-white'>Reasons</Nav.Link>
                  <Nav.Link href="#exercises" className='text-uppercase text-white'>Exercises</Nav.Link>
                  <Nav.Link href="#contact" className='text-uppercase text-white'>Contact</Nav.Link>
              </Nav>
              </Navbar.Collapse>
          </Container>
  </Navbar>
  )
}
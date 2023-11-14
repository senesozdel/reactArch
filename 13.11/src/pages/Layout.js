import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>



<Navbar expand="lg" className="bg-body-tertiary">
      <Container className='d-flex align-items-center justify-content-center'>
        <Navbar.Brand >React-Bootstrap</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link className='text-decoration-none' to="/home">Home</Link></Nav.Link>
            <Nav.Link >     <Link className='text-decoration-none' to="/contact">Contact</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item >Action</NavDropdown.Item>
              <NavDropdown.Item >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Outlet />
    </div>
  )
}

export default Layout
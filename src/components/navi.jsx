import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'

import './Styles/Navbar.css'

class Navi extends React.Component {
  render () {
    return (
    <Navbar className="standard">
    <Navbar.Brand href="#home">Robert Ludwick</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="https://drive.google.com/uc?export=download&id=1SZKGe93ndXtP52V0cufovE6sEC2lkP1J">Resume</Nav.Link>
        <NavDropdown title="Projects" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav className="mr-right">
        <Nav.Link href="https://github.com/RobertLudwick">Github</Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/robert-ludwick-473437151/">Likedin</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }
}

export default Navi;

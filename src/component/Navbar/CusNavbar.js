import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'

function CusNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">| Data Science |</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link style={{ textDecoration: 'none', color:"#f7bf31" }} to="/classification">&nbsp;&nbsp;Classification&nbsp;&nbsp;</Link>
            </NavItem>
            <NavItem>
              <Link style={{ textDecoration: 'none', color:"#b831f7" }} to="/regression">&nbsp;&nbsp;Regression&nbsp;&nbsp;</Link>
            </NavItem>
          </Nav>
        <NavbarText><Link style={{ textDecoration: 'none', marginRight:"40px" }} to="/About">About Us</Link> </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CusNavbar;
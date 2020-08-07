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
        <NavbarBrand href="/">| Learn Data Science |</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/classification">| Classification |</Link>
            </NavItem>
            <NavItem>
              <Link to="/regression">| Regression |</Link>
            </NavItem>
          </Nav>
        <NavbarText>Learning.... </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CusNavbar;
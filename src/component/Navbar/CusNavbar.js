import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

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
              <NavLink href="/classification">| Classification |</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/regression">| Regression |</NavLink>
            </NavItem>
          </Nav>
        <NavbarText>Learning.... </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CusNavbar;
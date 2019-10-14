import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export default props => {
  const [ isOpen, setIsOpen ] = useState( false );
  const toggle = () => setIsOpen( !isOpen );

  return (
    <Navbar color="primary" dark expand="md">
      <NavbarBrand href="/">Oficina - IFRO ADS</NavbarBrand>
      <NavbarToggler onClick={ toggle } />
      <Collapse isOpen={ isOpen } navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://ifro.edu.br">Site do IFRO</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}
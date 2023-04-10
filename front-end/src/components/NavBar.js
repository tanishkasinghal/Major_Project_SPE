import React, { useState } from 'react';
import { NavLink as ReactLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={ReactLink} to="/">Employee Management</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={ReactLink} to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/addEmployee">Add Employee</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Contact
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Services
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  )
}

export default NavBar
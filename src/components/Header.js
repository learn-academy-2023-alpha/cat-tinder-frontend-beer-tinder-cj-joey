import React, { useState } from "react";
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
} from "reactstrap";
import beerLogo from "../assets/beer-logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <Navbar color="dark" light={true} dark={true} expand="md" fixed="top">
        <NavbarBrand href="/">
          <img src={beerLogo} alt="beer logo" className="beer-logo" />
        </NavbarBrand>
        <NavbarBrand href="/">BeerTinder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/beerindex">All Beers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/beernew">Add a Beer</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Leave a Review</DropdownItem>
                <DropdownItem>About us</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Contact Us</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Have you met me?</NavbarText>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;

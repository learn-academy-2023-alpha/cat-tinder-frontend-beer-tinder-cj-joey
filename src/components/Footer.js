import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const Footer = () => {
  return (
    <>
      <footer>
        <Navbar
          className="navbar-footer"
          color="dark"
          light={true}
          dark={true}
          expand="md"
          fixed="bottom"
        >
          <NavbarBrand href="/" className="brand-name">
            BrewBud
          </NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Back to Top</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>&copy; Alpha 2023 | Joey🦘 and CJ</NavbarText>
        </Navbar>
      </footer>
    </>
  );
};

export default Footer;

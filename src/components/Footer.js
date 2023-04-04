import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

function Footer() {
  return (
    <div>
      <Navbar color="dark" light="true" dark="true" expand="md" fixed="bottom">
        <NavbarBrand href="/">BeerTinder</NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/">Back to Top</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>Have you met me?</NavbarText>
      </Navbar>
    </div>
  );
}

export default Footer;

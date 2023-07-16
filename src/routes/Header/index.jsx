import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ReactComponent as Logo } from "../../Assets/images/crown.svg";

function Header() {
  return (
    <Fragment>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/sign-in">
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </Fragment>
  );
}

export default Header;

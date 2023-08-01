import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartIcon from "../../components/CartIcon";
import CartDropdown from "../../components/CartDropdown";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../Utils/Firebase/FirebaseUtils";
import { ReactComponent as Logo } from "../../Assets/images/crown.svg";

function Header() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container className="position-relative">
          <Navbar.Brand as={Link} to="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="shop">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="contact">
                Contact
              </Nav.Link>
              {currentUser ? (
                <Nav.Link as={Link} onClick={signOutUser}>
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/auth">
                  Sign In
                </Nav.Link>
              )}
              <CartIcon />
            </Nav>
          </Navbar.Collapse>
          {isCartOpen && <CartDropdown />}
        </Container>
      </Navbar>
      <Outlet />
    </Fragment>
  );
}

export default Header;

import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from 'react-redux'
import CartDropdown from "../../components/CartDropdown";
import { signOutUser } from "../Utils/Firebase/FirebaseUtils";
import { BrandLogo } from "../../Assets/images/BrandLogo";
import CartIcon from "../../components/CartIcon";

function Header() {

	const currentUser = useSelector((state) => state.user.currentUser)
	const isCartOpen = useSelector((state) => state.user.isCartOpen)

	return (
		<Fragment>
			<Navbar
				sticky="top"
				collapseOnSelect
				expand="lg"
				className="bg-body-tertiary flex-shrink-0"
			>
				<Container className="position-relative">
					<Navbar.Brand as={Link} to="/">
						<BrandLogo />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link as={Link} to="shop">
								Shop
							</Nav.Link>
							<Nav.Link as={Link} to="wishlist">
								Wishlist
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

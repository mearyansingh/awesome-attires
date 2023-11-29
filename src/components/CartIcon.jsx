import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { setIsCartOpen } from "../Store/Actions/UserAction"

function CartIcon() {

	const dispatch = useDispatch()
	const isCartOpen = useSelector((state) => state.user.isCartOpen)
	const cartCount = useSelector((state) => state.user.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0))

	return (
		<>
			<Button type="button" variant="" onClick={() => dispatch(setIsCartOpen(!isCartOpen))} className="bi bi-bag-fill fs-5 position-relative border-0 p-0">
				{(cartCount > 0) &&
					<span className="cart-item-count position-absolute fw-normal start-100 translate-middle badge rounded-pill bg-danger">
						{cartCount}
						<span className="visually-hidden">unread messages</span>
					</span>
				}
			</Button>
		</>
	);
}

export default CartIcon;

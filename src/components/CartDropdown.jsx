import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function CartDropdown() {

	const cartItems = useSelector((state) => state.user.cartItems)

	/**useNavigate hook used to navigate the checkout page */
	const navigate = useNavigate();

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems?.map((item) => (
						<div className="cart-item-container" key={item.id}>
							<img src={item.imageUrl} alt={item.name} />
							<div className="item-details">
								<span className="name">{item.name}</span>
								<span className="price">
									{item.quantity} x ${item.price}
								</span>
							</div>
						</div>
					))
				) : (
					<div>
						<i className="text-center fs-1 d-block bi bi-bag-fill"></i>
						<p className="mb-1 fw-bold">Hey, it feels so light!</p>
						<span className="empty-message">There is nothing in your bag. Let's add some items.</span>
						<Button size="sm" className="opacity--primary">Add Items from Wishlist</Button>
					</div>
				)}
			</div>
			<Button onClick={() => navigate("/checkout")}>Go To Checkout</Button>
		</div>
	);
}

export default CartDropdown;

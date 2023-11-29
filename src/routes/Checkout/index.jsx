import { useSelector, useDispatch } from 'react-redux'
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { addItemToCart, clearItemFromCart, removeItemToCart } from '../../Store/Actions/UserAction';
import PaymentForm from '../../components/PaymentForm'

function Checkout() {

	const dispatch = useDispatch()
	const cartItems = useSelector(state => state.user.cartItems)
	const cartTotal = useSelector(state => state.user.cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0))

	// console.log(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY, "fffff")
	return (
		<Container>
			<Table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Description</th>
						<th>Quantity</th>
						<th>Price</th>
						<th className="text-end">Action</th>
					</tr>
				</thead>
				<tbody>
					{cartItems.map((cartItem) => (
						<tr key={cartItem.id}>
							<td>
								<img
									className="w-25"
									src={cartItem.imageUrl}
									alt={cartItem.name}
								/>
							</td>
							<td>
								<div>{cartItem.name}</div>
							</td>
							<td>
								<Button
									variant="link"
									className="text-decoration-none p-0 me-2 fs-4"
									onClick={() => dispatch(removeItemToCart(cartItems, cartItem))}
								>
									-
								</Button>
								{cartItem.quantity}
								<Button
									className="text-decoration-none p-0 ms-2 fs-4"
									variant="link"
									onClick={() => dispatch(addItemToCart(cartItems, cartItem))}
								>
									+
								</Button>
							</td>
							<td>
								<div>{cartItem.price}</div>
							</td>
							<td className="text-end">
								<Button onClick={() => dispatch(clearItemFromCart(cartItems, cartItem))}>
									<i className="bi bi-trash3"></i>
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<span className="d-block fs-3 text-end">Total:Rs. {cartTotal}</span>
			<PaymentForm />
		</Container>
	);
}

export default Checkout;

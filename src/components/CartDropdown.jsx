import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function CartDropdown() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  console.log(cartItems, "cartItems....");

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
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={() => navigate("/checkout")}>Go To Checkout</Button>
    </div>
  );
}

export default CartDropdown;

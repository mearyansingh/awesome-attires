import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../Assets/images/shopping-bag.svg";
import { CartContext } from "../contexts/CartContext";

function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;

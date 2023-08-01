import { useContext } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { CartContext } from "../../contexts/CartContext";

function Checkout() {
  const {
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
  } = useContext(CartContext);

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
                  onClick={() => removeItemToCart(cartItem)}
                >
                  -
                </Button>
                {cartItem.quantity}
                <Button
                  className="text-decoration-none p-0 ms-2 fs-4"
                  variant="link"
                  onClick={() => addItemToCart(cartItem)}
                >
                  +
                </Button>
              </td>
              <td>
                <div>{cartItem.price}</div>
              </td>
              <td className="text-end">
                <Button onClick={() => clearItemFromCart(cartItem)}>
                  <i className="bi bi-trash3"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <span className="d-block fs-3 text-end">Total:${cartTotal}</span>
    </Container>
  );
}

export default Checkout;

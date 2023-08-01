import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ProductsContext } from "../../contexts/ProductContext";
import { CartContext } from "../../contexts/CartContext";

function Shop() {
  const { products } = useContext(ProductsContext);
  const { addItemToCart } = useContext(CartContext);
  return (
    <Container>
      <Row>
        {products?.map((product) => (
          <Col lg={4} key={product.id} className="mb-3">
            <div className="h-100 d-flex flex-column">
              <Card className="h-100 bg-dark text-white custom-card border-0">
                <Card.Img
                  className="h-100"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <Card.ImgOverlay className="d-flex align-items-center justify-content-center custon-card-overlay">
                  <Button onClick={() => addItemToCart(product)}>
                    Add To Cart
                  </Button>
                </Card.ImgOverlay>
              </Card>
              <p className="mb-0">{product.name}</p>
              <p className="mb-0">{product.price}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Shop;

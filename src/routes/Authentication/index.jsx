import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignUpForm from "../SignUpForm";
import SignInForm from "../SignInForm";

function Authentication() {
  return (
    <div className="py-4 py-lg-5">
      <Container>
        <Row className="g-5">
          <Col md={6} className="">
            <SignInForm />
          </Col>
          <Col md={6} className="border-start">
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Authentication;

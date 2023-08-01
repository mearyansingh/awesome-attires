import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignUpForm from "../SignUpForm";
import SignInForm from "../SignInForm";

function Authentication() {
  return (
    <Fragment>
      <Container>
        <Row className="g-5">
          <Col lg={6}>
            <SignInForm />
          </Col>
          <Col lg={6}>
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Authentication;

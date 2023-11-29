import { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  createAuthUserWithEmailAndPAssword,
  createUserDocumentFromAuth,
} from "../Utils/Firebase/FirebaseUtils";
// import { UserContext } from '../../contexts/UserContext'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {

  /**Initial state */
  const [formFields, setFormFields] = useState(defaultFormFields);

  /**Context used */
  // const { setCurrentUser } = useContext(UserContext)

  /**Destructure form fields */
  const { displayName, email, password, confirmPassword } = formFields;

  // console.log('hit')

  /**Reset form fields */
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  /**Handle change function */
  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  /**Handle submit function */
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPAssword(
        email,
        password
      );
      // setCurrentUser(user)
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.log("user creation encountered an error", error);
    }
  };

  return (
    <>
      <h2>You don't have account</h2>
      <Card>
        <Card.Body>
          <h4 className="mb-3">Sign up with your email and password</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Display name</Form.Label>
              <Form.Control
                type="text"
                name="displayName"
                value={displayName}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Button className="d-block mx-auto" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default SignUpForm;

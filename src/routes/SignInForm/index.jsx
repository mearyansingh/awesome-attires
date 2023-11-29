import { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
	createAuthUserWithEmailAndPAssword,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPAssword,
} from "../Utils/Firebase/FirebaseUtils";
// import { UserContext } from '../../contexts/UserContext'


const defaultFormFields = {
	email: "",
	password: "",
};

function SignInForm() {

	/**Initial state */
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	/**Context used */
	// const { setCurrentUser } = useContext(UserContext)

	/**Function to handle the sign in with Google */
	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		// setCurrentUser(user);
		createUserDocumentFromAuth(user)
	};

	/**Reset form fields */
	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	/**On changing the form field */
	function handleChange(event) {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	}

	/**On submit the form */
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const { user } = await signInAuthUserWithEmailAndPAssword(
				email,
				password
			);
			// setCurrentUser(user)
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("Incorrect password for email");
					break;
				case "auth/user-not-found":
					alert("No user associated with this email");
					break;
				default:
					console.log(error);
			}
		}
	};

	return (
		<>
			<h2>Already have an account?</h2>
			<Card>
				<Card.Body>
					<h4 className="mb-3">Sign in with your email and password</h4>
					<Form onSubmit={handleSubmit}>
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
						<div className="d-flex justify-content-center">
							<Button className="me-3" type="submit">
								Sign In
							</Button>
							<Button type="button" onClick={signInWithGoogle}>
								<i className="bi bi-google pe-2"></i>Google Sign In
							</Button>
						</div>
					</Form>
				</Card.Body>
			</Card>
		</>
	);
}

export default SignInForm;

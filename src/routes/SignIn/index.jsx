import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../Utils/Firebase/FirebaseUtils";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    //  console.log(response);
  };

  return (
    <Container>
      <h1>Sign in page</h1>
      <Button onClick={logGoogleUser}>sign in with google popup</Button>
    </Container>
  );
}

export default SignIn;

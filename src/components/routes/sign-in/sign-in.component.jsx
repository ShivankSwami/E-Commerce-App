import React from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      SignIn
      <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  );
};

export default SignIn;

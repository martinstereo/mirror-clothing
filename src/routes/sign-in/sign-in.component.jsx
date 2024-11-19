import React from 'react'

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../sign-up/sign-up-form.component';

const SignIn = () => {

  // Get google sign-in auth from firebase with pop-up
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google
      </button>
      <SignUpForm />
    </div>
  )
};

export default SignIn;
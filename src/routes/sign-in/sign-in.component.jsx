import { React, useState, Fragment } from 'react'

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  logInWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../sign-up/sign-up-form.component';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import "./sign-in.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleLogInSubmit = async (event) => {
    event.preventDefault();
    try {
      await logInWithEmailAndPassword(email, password);
      console.log("Login successful");
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("invalid credentials");
      }
      console.error("error logging in", error);
    }
  }

  // Get google sign-in auth from firebase with pop-up
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Fragment>
      <div className='sign-in-container'>
        <h2>Sign In here</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={handleLogInSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <Button type="submit">Sign In</Button>
        </form>
        <Button buttonType="google" onClick={logGoogleUser}>
          Sign in with Google
        </Button>
      </div>
      <SignUpForm />
    </Fragment>
  )
};

export default SignIn;
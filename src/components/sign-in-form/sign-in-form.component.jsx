import { useState } from 'react';

//Redux
import { useDispatch } from 'react-redux';

//Components
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
//Styles
import { SignInContainer, Title, ButtonContainer } from './sign-in-form.styles';

//Redux Store Actions
import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSignInSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-credential':
          alert('invalid credentials');
          break;
        case 'auth/wrong-password':
          alert('incorrect password');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
          break;
      }
    }
    resetFormFields();
  };

  // Get google sign-in auth from firebase with pop-up
  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignInContainer>
      <Title>Already have an account?</Title>
      <span>Sign in with email and password</span>

      <form onSubmit={handleSignInSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

import { React, Fragment } from 'react';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const Authentication = () => {
  return (
    <Fragment>
      <h1>Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
    </Fragment>
  );
};

export default Authentication;

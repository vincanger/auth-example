import * as React from 'react';
import Layout from './components/Layout';
import SignInForm from './SignInForm.jsx';

import login from '@wasp/auth/login';
import { signInUrl as googleSignInUrl } from '@wasp/auth/helpers/Google';
import { signInUrl as githubSignInUrl } from '@wasp/auth/helpers/GitHub';

const Login = () => {
  return (
    <Layout>
      <SignInForm googleUrl={googleSignInUrl} githubUrl={githubSignInUrl} handleLogin={login} />
    </Layout>
  );
};

export default Login;

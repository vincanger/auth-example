import * as React from 'react';
import Layout from './components/Layout';
import SignInForm from './components/SignInForm.jsx';

/** 😎 WASP AUTH 🐝 */
import login from '@wasp/auth/login';
import { signInUrl as googleSignInUrl } from '@wasp/auth/helpers/Google';
import { signInUrl as githubSignInUrl } from '@wasp/auth/helpers/GitHub';

export function LoginPage() {
  return (
    <Layout>
      <SignInForm 
        googleUrl={googleSignInUrl} 
        githubUrl={githubSignInUrl} 
        handleLogin={login} 
        />
    </Layout>
  );
};


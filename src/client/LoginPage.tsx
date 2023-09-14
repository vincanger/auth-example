import * as React from 'react';
import Layout from './MainLayout.jsx';
import { AiOutlineGithub, AiOutlineGoogle } from 'react-icons/ai';
import SignInForm from './components/SignInForm.jsx';
import Button from './components/Button.jsx';

/** 😎 WASP AUTH 🐝 */
import { signInUrl as googleSignInUrl } from '@wasp/auth/helpers/Google';
import { signInUrl as githubSignInUrl } from '@wasp/auth/helpers/GitHub';

export function LoginPage() {
  return (
    <Layout>
      <Button onClick={() => (window.location.href = googleSignInUrl)}>
        <AiOutlineGoogle />
        &nbsp; Sign in with Google
      </Button>
      <Button onClick={() => (window.location.href = githubSignInUrl)}>
        <AiOutlineGithub />
        &nbsp; Sign in with GitHub
      </Button>
    </Layout>
  );
};


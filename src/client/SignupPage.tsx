import Layout from './MainLayout.jsx';

/** 😎 WASP AUTH 🐝 */
import { SignupForm } from '@wasp/auth/forms/Signup';

export function SignupPage() {
  return (
    <Layout>
      <SignupForm />
    </Layout>
  );
}

import './Main.css';
import * as React from 'react';
import MainLayout from './MainLayout';
import { Code } from '@chakra-ui/react';
import Button from './components/Button';

/** 😎 WASP AUTH 🐝 */
import logout from '@wasp/auth/logout.js';
import useAuth from '@wasp/auth/useAuth';

const MainPage = () => {
  const { data: user } = useAuth();

  return (
    <MainLayout>

      <Code>
        {user ? 
          '🔑 AUTHORIZED 😎' 
            : 
          '🙏 PROTECT ME, PLZ 😕'}
      </Code>

      <Button onClick={logout}>Logout</Button>

    </MainLayout>
  );
};
export default MainPage;

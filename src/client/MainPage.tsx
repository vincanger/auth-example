import './Main.css';
import * as React from 'react';
import Logo from './components/Logo';
import MainLayout from './MainLayout';
import Button from './components/Button';
import useReward from './components/useReward';
import { VStack, Code } from '@chakra-ui/react';

/** WASP AUTH 🐝 */
import logout from '@wasp/auth/logout.js';
import useAuth from '@wasp/auth/useAuth';

const MainPage = () => {
  useReward();

  const { data: user } = useAuth();

  return (
    <MainLayout>
      <VStack mt={10} spacing={10}>
        <Logo mb={-10} />
        <span id='rewardId' />

        {/** access the user object */}
        <Code>{user ? '🤘 AUTH WITH WASP 😎' : '🙏 PROTECT ME WITH AUTH, PLZ 😕'}</Code>

        <Button clickHandler={logout}>Logout</Button>
      </VStack>
    </MainLayout>
  );
};
export default MainPage;

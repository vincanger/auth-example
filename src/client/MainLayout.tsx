import * as React from 'react';
import Logo from './components/Logo';
import { theme } from './components/Theme';
import useReward from './components/useReward';
import { MouseProvider } from './components/MouseProvider';
import { ChakraProvider, VStack, HStack, Heading } from '@chakra-ui/react';
import Button from './components/Button';
import logout from '@wasp/auth/logout.js';

const Login = ({ username, children }: { username?: string, children: React.ReactNode }) => {
  useReward();
  return (
    <MouseProvider>
      <ChakraProvider theme={theme}>
        <VStack mt={10} mx='auto' spacing={10} justify='center' align='center' w='400px'>
          <HStack>
            <Logo />
            <Heading>To Do's</Heading>
          </HStack>
          {/* <span id='rewardId' /> */}

          {children}
          <Button onClick={logout}>Logout</Button>
        </VStack>
      </ChakraProvider>
    </MouseProvider>
  );
};

export default Login;

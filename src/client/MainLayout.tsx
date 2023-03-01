import * as React from 'react';
import Logo from './components/Logo';
import { theme } from './components/Theme';
import useReward from './components/useReward';
import { MouseProvider } from './components/MouseProvider';
import { ChakraProvider, ColorModeScript, VStack, HStack, Heading } from '@chakra-ui/react';

const Login = ({ username, children }: { username?: string, children: React.ReactNode }) => {
  useReward();
  return (
    <MouseProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode='light' />
        <VStack mt={10} spacing={10}>
          <HStack>
            <Logo />
            <Heading>To Do's</Heading>
          </HStack>
          {/* <span id='rewardId' /> */}

          {children}
        </VStack>
      </ChakraProvider>
    </MouseProvider>
  );
};

export default Login;

import * as React from 'react';
import Logo from './components/Logo';
import { theme } from './components/Theme';
import useReward from './components/useReward';
import { MouseProvider } from './components/MouseProvider';
import { ChakraProvider, ColorModeScript, VStack } from '@chakra-ui/react';

const Login = ({ children }: { children: React.ReactNode }) => {
  useReward();
  return (
    <MouseProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode='light' />
        <VStack mt={10} spacing={10}>
          <Logo mb={-10} />
          <span id='rewardId' />

          {children}
        </VStack>
      </ChakraProvider>
    </MouseProvider>
  );
};

export default Login;

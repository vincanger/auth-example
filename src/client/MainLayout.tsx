import * as React from 'react';
import { theme } from './components/Theme';
import { MouseProvider } from './components/MouseProvider';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

const Login = ({ children }: { children: React.ReactNode }) => {
  return (
    <MouseProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode='light' />
        { children }
      </ChakraProvider>
    </MouseProvider>
  );
};

export default Login;

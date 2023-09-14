import Card from './Card';
import * as React from 'react';
import { theme } from './Theme';
import { Stack } from '@chakra-ui/react';
import { MouseProvider } from './MouseProvider';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

const Login = ({ children }: { children: React.ReactNode }) => {
  return (
    <MouseProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode='light' />
        <Stack maxW='xl' margin='0 auto' spacing='sm' mt='5'>
          <Card bg='white' spotlightRadius='0rem' border={'2px solid rgba(0, 0, 0, 0)'}>
            {children}
          </Card>
        </Stack>
      </ChakraProvider>
    </MouseProvider>
  );
};

export default Login;

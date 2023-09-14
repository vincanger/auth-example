import { useEffect, ReactNode } from 'react';
import Logo from './components/Logo';
import { theme } from './components/Theme';
import { MouseProvider } from './components/MouseProvider';
import { ChakraProvider, VStack, HStack, Heading } from '@chakra-ui/react';
import Button from './components/Button';
import logout from '@wasp/auth/logout.js';

const Layout = ({ username, children }: { username?: string, children: ReactNode }) => {

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
          {username && username.length > 0 && <Button onClick={logout}>Logout</Button>}
        </VStack>
      </ChakraProvider>
    </MouseProvider>
  );
};

export default Layout;

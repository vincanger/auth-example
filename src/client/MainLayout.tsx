import { logout, useAuth } from "wasp/client/auth";
import { ReactNode } from 'react';
import Logo from './components/Logo';
import { theme } from './components/Theme';
import { MouseProvider } from './components/MouseProvider';
import { ChakraProvider, VStack, HStack, Heading } from '@chakra-ui/react';
import Button from './components/Button';

const Layout = ({ children }: { children: ReactNode }) => {

  const { data: user } = useAuth();

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
          {user!! && <Button onClick={logout}>Logout</Button>}
        </VStack>
      </ChakraProvider>
    </MouseProvider>
  );
};

export default Layout;

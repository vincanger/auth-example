import waspLogo from '../waspLogo.png';
import { Center, VStack, Box, BoxProps } from '@chakra-ui/react';

const Logo = (props: BoxProps) => {
  return (
    <Box {...props}>
      <VStack w={10} shadow='lg' borderRadius='full'>
        <img src={waspLogo} alt='wasp' />
      </VStack>
    </Box>
  );
};

export default Logo;
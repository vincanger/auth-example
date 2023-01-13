import waspLogo from '../waspLogo.png';
import { Center, VStack, Box, BoxProps } from '@chakra-ui/react';

const Logo = (props: BoxProps) => {
  return (
    <Box {...props}>
      <div className='shadow-lg rounded-full align-center'>
        <img src={waspLogo} alt='wasp' className='h-40' />
      </div>
    </Box>
  );
};

export default Logo;
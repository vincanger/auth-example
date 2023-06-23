import Card from './Card';
import * as React from 'react';
import { Box, Button } from '@chakra-ui/react';

const iButton = ({
  onClick,
  children,
  minWidth,
  maxWidth,
}: {
  onClick: any;
  children: React.ReactNode;
  minWidth?: string;
  maxWidth?: string;
}) => {
  return (
    <Box boxShadow={'md'} rounded={'0.5rem'}>
      <Card w={'full'} h={'full'} interactive>
        <Button
          minWidth={minWidth}
          maxWidth={maxWidth}
          onClick={onClick}
          // style={{ cursor: 'pointer' }}
          // className='flex w-full justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 text-md font-bold text-yellow-500 shadow-sm hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2'
        >
          {children}
        </Button>
      </Card>
    </Box>
  );
};

export default iButton;

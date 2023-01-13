import * as React from 'react';
import { useMouse } from './MouseProvider';
import { Box, BoxProps } from '@chakra-ui/react';
import { motion, useMotionTemplate, useSpring } from 'framer-motion';

const MotionBox = motion(Box);

interface CardProps extends BoxProps {
  spotlightGradient?: string;
  spotlightRadius?: string;
  interactive?: boolean;
}

const getInteractiveProps = ({ interactive }: { interactive: boolean }) => {
  if (!interactive) {
    return {};
  }
  return {
    transition: 'filter 0.4s',
    cursor: 'pointer',
    filter: 'brightness(90%)',
    _hover: {

      filter: 'brightness(100%)',

    },
  };
};

const Card = ({
  spotlightGradient = 'radial(yellow.300, rgba(0,0,0,0))',
  spotlightRadius = '10rem',
  rounded = '0.5rem',
  bg = 'whiteAlpha.600',
  interactive = false,
  children,
  ...otherProps
}: CardProps) => {
  const mouse = useMouse();

  const posX = useSpring(mouse.position.x, {
    mass: 0.1,
    stiffness: 120,
    damping: 10,
  });
  const posY = useSpring(mouse.position.y, {
    mass: 0.1,
    stiffness: 120,
    damping: 10,
  });
  const transform = useMotionTemplate`translate(-50%,-50%) translate(${posX}px,${posY}px)`;

  return (
    <MotionBox
      border='0.35px solid rgba(0, 0, 0, 0.15)'
      pos='relative'
      rounded={rounded}
      bg={bg}
      clipPath={`inset(0% 0% -2% 0% round ${rounded})`}
      {...otherProps}
    >
      <MotionBox
        style={{ transform }}
        pos='fixed'
        top={0}
        left={0}
        // rounded={rounded}
        w={`calc(${spotlightRadius} * 2)`}
        h={`calc(${spotlightRadius} * 2)`}
        rounded='full'
        bgGradient={spotlightGradient}
        filter='blur(4rem)'
      ></MotionBox>

      <Box
        borderRadius='inherit'
        bg='inherit'
        pos='relative'
        // rounded={rounded}
        {...getInteractiveProps({ interactive })}
      >
        {children}
      </Box>
    </MotionBox>
  );
};

export default Card;

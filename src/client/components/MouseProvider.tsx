import React, { createContext, useContext, useMemo, Context } from 'react';
import { useEventListener } from '@chakra-ui/react';
import { useMotionValue, useVelocity, MotionValue } from 'framer-motion';

// Track mouse position as motion values
const useMousePosition = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEventListener('mousemove', (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
  });

  return useMemo(
    () => ({
      x,
      y,
    }),
    [x, y]
  );
};



interface MouseContext {
  position: {
    x: MotionValue<number>
    y: MotionValue<number>
  };
  velocity: {
    x: MotionValue<number>
    y: MotionValue<number>
  };
}
const context = createContext({} as MouseContext);

// By using react context here, we can avoid spamming window
// with mouse listeners every time we use a mouse hook.
export const MouseProvider = ({ children }: {children: any}) => {
  const { x, y } = useMousePosition();
  const velocityX = useVelocity(x);
  const velocityY = useVelocity(y);

  const mouse = useMemo(
    () => ({
      position: {
        x,
        y,
      },
      velocity: {
        x: velocityX,
        y: velocityY,
      },
    }),
    [x, y, velocityX, velocityY]
  );

  return <context.Provider value={mouse}>{children}</context.Provider>;
};

export const useMouse = () => {
  return useContext(context);
};


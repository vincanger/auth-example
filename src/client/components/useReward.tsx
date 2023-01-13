import { useReward } from 'react-rewards';
import * as React from 'react';

const Reward = () => {
    const { reward } = useReward('rewardId', 'confetti', {
    lifetime: 1000,
    angle: 90,
    decay: 0.9,
    spread: 105,
    startVelocity: 35,
    elementCount: 150,
    elementSize: 10,
  });

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('rewarding');
      reward();
    }, 500);
  }, []);

  return reward
}

export default Reward;
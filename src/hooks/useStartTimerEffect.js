import { useEffect } from 'react';
import { subtractSecond } from '../components/Timer/utils/lib';
import { second } from '../components/Timer/utils/preset';
import useTimerContext from './useTimerContext';

const useStartTimerEffect = () => {
  const { time, setTime } = useTimerContext();

  const startTimer = () => {
    if (!time) {
      return undefined;
    }

    const id = setTimeout(() => {
      setTime(subtractSecond);
    }, second);

    return () => {
      clearTimeout(id);
    };
  };

  useEffect(startTimer, [time, setTime]);
};

export default useStartTimerEffect;

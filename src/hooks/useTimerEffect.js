import { useEffect } from 'react';
import { second } from '../components/Timer/utils/presets';
import useTimerContext from './useTimerContext';

const useTimerEffect = () => {
  const { time, dispatch, action } = useTimerContext();

  const startTimer = () => {
    if (time <= 0) {
      return undefined;
    }

    const id = setTimeout(() => {
      dispatch(action.subtract());
    }, second);

    return () => {
      clearTimeout(id);
    };
  };

  useEffect(startTimer, [time, dispatch, action]);
};

export default useTimerEffect;

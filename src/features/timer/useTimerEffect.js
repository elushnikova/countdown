import { useEffect } from 'react';
import { scheduleErrorClearing, cancelScheduledErrorClearing } from './utils/lib';
import { second } from './utils/presets';
import useTimerContext from './useTimerContext';

const useTimerEffect = () => {
  const { timer, dispatch, action } = useTimerContext();

  const startTimer = () => {
    const clearError = () => dispatch(action.clearError());
    const scheduledClearing = scheduleErrorClearing(timer.error, clearError);

    if (timer.duration <= 0) {
      return undefined;
    }

    const id = setTimeout(() => {
      dispatch(action.subtract());
    }, second);

    return () => {
      clearTimeout(id);
      cancelScheduledErrorClearing(timer.error, scheduledClearing);
    };
  };

  useEffect(startTimer, [timer.duration, timer.error, dispatch, action]);
};

export default useTimerEffect;

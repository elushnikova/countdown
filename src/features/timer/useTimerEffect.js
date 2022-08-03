import { useEffect } from 'react';
import {
  scheduleErrorReset,
  cancelErrorReset,
  schedule,
  cancel,
} from './utils/lib';
import { second } from './utils/presets';
import useTimerContext from './useTimerContext';

const useTimerEffect = () => {
  const { timer, dispatch, action } = useTimerContext();

  const startTimer = () => {
    const clearError = () => dispatch(action.clearError());
    const scheduledReset = scheduleErrorReset(timer.error, clearError);

    if (timer.duration <= 0) {
      return undefined;
    }

    const subtractSecond = () => dispatch(action.subtract());
    const scheduledSubtraction = schedule(subtractSecond, second);

    return () => {
      cancel(scheduledSubtraction);
      cancelErrorReset(scheduledReset, !timer.error);
    };
  };

  useEffect(startTimer, [timer.duration, timer.error, dispatch, action]);
};

export default useTimerEffect;

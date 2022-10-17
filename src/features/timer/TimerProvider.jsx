import { useReducer } from 'react';
import { TimerContext } from './useTimerContext';
import timerReducer from './timerReducer';
import timerAction from './timerAction';
import { lessThanMinimum, moreThanMaximum } from './utils/lib';
import { preset } from './utils/presets';

const initialTimer = {
  error: null,
  duration: preset.default,
};

const TimerProvider = ({ children }) => {
  const [timer, dispatch] = useReducer(timerReducer, initialTimer);

  return (
    <TimerContext.Provider value={{
      timer,
      dispatch,
      action: timerAction,
      lessThanMinimum,
      moreThanMaximum,
      isInverted: !timer.duration,
    }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;

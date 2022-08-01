import { useReducer } from 'react';
import { TimerContext } from './useTimerContext';
import timerReducer from './timerReducer';
import timerAction from './timerAction';
import { lessThanMinimum, moreThanMaximum } from './utils/lib';
import { preset } from './utils/presets';

const TimerProvider = ({ children }) => {
  const [time, dispatch] = useReducer(timerReducer, preset.default);

  return (
    <TimerContext.Provider value={{
      time,
      dispatch,
      action: timerAction,
      lessThanMinimum,
      moreThanMaximum,
    }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;

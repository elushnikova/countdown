import { useContext, createContext, useReducer } from 'react';
import { subtractSecond } from '../components/Timer/utils/lib';
import { preset, second } from '../components/Timer/utils/presets';

const type = {
  SET: 'SET',
  SUBTRACT: 'SUBTRACT_SECOND',
};

const timerAction = {
  setTime: (ms) => ({ type: type.SET, payload: ms }),
  subtract: () => ({ type: type.SUBTRACT }),
};

const timerReducer = (currentDuration, action) => {
  switch (action.type) {
    case type.SET: {
      const duration = Number(action.payload);
      const isInvalid = Number.isNaN(duration);
      const lessThanMinimum = duration < preset.minimum;
      const moreThanMaximum = duration > preset.maximum;

      return isInvalid || lessThanMinimum
        ? preset.default
        : moreThanMaximum
          ? preset.maximum
          : action.payload;
    }

    case type.SUBTRACT: {
      return currentDuration < second
        ? 0
        : subtractSecond(currentDuration);
    }

    default: {
      return currentDuration;
    }
  }
};

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [time, dispatch] = useReducer(timerReducer, preset.default);

  return (
    <TimerContext.Provider value={{ time, dispatch, action: timerAction }}>
      {children}
    </TimerContext.Provider>
  );
};

const useTimerContext = () => useContext(TimerContext);

export default useTimerContext;
export { TimerProvider };

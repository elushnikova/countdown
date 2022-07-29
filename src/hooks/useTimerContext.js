import { useState, useContext, createContext } from 'react';
import { preset } from '../components/Timer/utils/presets';

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(preset.tenMin);

  return (
    <TimerContext.Provider value={{ time, setTime }}>
      {children}
    </TimerContext.Provider>
  );
};

const useTimerContext = () => useContext(TimerContext);

export default useTimerContext;
export { TimerProvider };

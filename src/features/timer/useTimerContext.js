import { useContext, createContext } from 'react';

const TimerContext = createContext();

const useTimerContext = () => useContext(TimerContext);

export default useTimerContext;
export { TimerContext };

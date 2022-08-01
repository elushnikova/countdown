import { useTransition } from 'react-spring';
import Toggle from '../Toggle/Toggle.jsx';
import Settings from '../Settings/Settings.jsx';
import Timer from '../../features/timer/Timer.jsx';
import TimeOver from '../../features/timer/TimeOver.jsx';
import styles from './App.module.scss';
import useTimerContext from '../../features/timer/useTimerContext';
import useSidebarContext from '../../hooks/useSidebarContext';

function App() {
  const { time } = useTimerContext();
  const { open } = useSidebarContext();

  const timerTransitions = useTransition(time === 0, {
    from: { top: -9999 },
    enter: { top: 0 },
  });

  const settingsTransitions = useTransition(open, {
    from: { right: -350 },
    enter: { right: 0 },
    leave: { right: -350 },
    delay: 100,
    reverse: open,
  });

  return (
    <main className={styles.container}>
      <Toggle isInverted={!time} />
      <Timer />
      {timerTransitions((props, item) => item && <TimeOver style={props} />)}
      {settingsTransitions(
        (props, item) => item && <Settings style={props} isInverted={!time} />,
      )}
    </main>
  );
}

export default App;

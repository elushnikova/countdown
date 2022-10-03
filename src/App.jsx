import { useTransition } from 'react-spring';
import Toggle from './features/settings/Toggle.jsx';
import Settings from './features/settings/Settings.jsx';
import Timer from './features/timer/Timer.jsx';
import TimeOver from './features/timer/TimeOver.jsx';
import styles from './App.module.scss';
import useTimerContext from './features/timer/useTimerContext';
import useSidebarContext from './features/settings/useSidebarContext';

function App() {
  const { timer } = useTimerContext();
  const { open } = useSidebarContext();

  const timerTransitions = useTransition(timer.duration === 0, {
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
      <Toggle />
      <Timer />
      {timerTransitions((props, item) => item && <TimeOver style={props} />)}
      {settingsTransitions(
        (props, item) => item && <Settings style={props} />,
      )}
    </main>
  );
}

export default App;

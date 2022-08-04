import { animated, config, useTransition } from 'react-spring';

import { useState } from 'react';
import useTimerContext from './useTimerContext';
import styles from './TimerAlert.module.scss';

function TimerAlert() {
  const { timer } = useTimerContext();
  const [show, set] = useState(Boolean(timer.error));
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200, // delay before animation starts
    config: config.molasses,
    onRest: () => set(false), // start leave animation automatically
  });

  return transitions(
    (transitionStyles, item) => item && (
      <animated.div className={styles.alert} style={transitionStyles}>
        {
          timer.error
            .split('\n')
            .map((line) => (
              <p key={line} className={styles.alertText}>
                {line}
              </p>
            ))
        }
      </animated.div>
    ),
  );
}

export default TimerAlert;

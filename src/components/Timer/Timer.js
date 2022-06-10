import { useContext, useEffect } from 'react';
import { second } from './utils/preset';
import {
  subtractSecond,
  padNumber,
  truncate,
  divideByMinute,
  moduloByMinute,
  lessThanMinute,
  lessThanTenSec,
} from './utils/lib';
import styles from './Timer.module.scss';
import TimerContext from '../../contexts/TimerContext';

function Timer() {
  const { time, setTime } = useContext(TimerContext);

  const acceptSeconds = () => {
    const querySeconds = new URLSearchParams(document.location.search).get('s');
    if (!querySeconds) return;

    const maxMinutes = 45;
    let seconds = parseInt(querySeconds, 10);

    if (seconds > maxMinutes * 60) {
      seconds = maxMinutes * 60;
    }

    window.history.replaceState(null, '', document.location.origin);
    setTime(seconds * 1000);
  };

  const startTimer = () => {
    if (!time) return undefined;

    const id = setTimeout(() => {
      setTime(subtractSecond);
    }, second);

    return () => {
      clearTimeout(id);
    };
  };

  useEffect(acceptSeconds, [setTime]);
  useEffect(startTimer, [time, setTime]);

  return (
    <>
      {Boolean(time) && (
        <div
          className={`${styles.block} ${lessThanMinute(time) && styles.single}`}
        >
          {!lessThanMinute(time) && (
            <>
              <span className={styles.minutes}>
                {padNumber(truncate(divideByMinute(time)))}
              </span>
              <span className={styles.separator}>:</span>
            </>
          )}

          <span className={styles.seconds}>
            {lessThanTenSec(time)
              ? moduloByMinute(time) / second
              : padNumber(moduloByMinute(time) / second)}
          </span>
        </div>
      )}
    </>
  );
}

export default Timer;

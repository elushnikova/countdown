import { useEffect } from 'react';
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
import useTimerContext from '../../hooks/useTimerContext';
import useConfigContext from '../../hooks/useConfigContext';

function Timer() {
  const { time, setTime } = useTimerContext();
  const { maxMinutes, queryKeySeconds, replaceHistoryEntry } = useConfigContext();

  const acceptSeconds = () => {
    const queryString = new URLSearchParams(document.location.search);
    const querySeconds = queryString.get(queryKeySeconds);

    if (!querySeconds) return;

    let seconds = parseInt(querySeconds, 10);
    if (seconds > maxMinutes * 60) {
      seconds = maxMinutes * 60;
    }

    if (replaceHistoryEntry) {
      window.history.replaceState(null, '', document.location.origin);
    }

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

  useEffect(acceptSeconds, [setTime, queryKeySeconds, maxMinutes, replaceHistoryEntry]);
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

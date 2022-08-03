import { second } from './utils/presets';
import {
  padNumber,
  truncate,
  divideByMinute,
  moduloByMinute,
  lessThanMinute,
  lessThanTenSec,
} from './utils/lib';
import styles from './Timer.module.scss';
import useTimerContext from './useTimerContext';
import useQueryInputEffect from '../duration/useQueryInputEffect';
import useTimerEffect from './useTimerEffect';
import TimerAlert from './TimerAlert.jsx';

function Timer() {
  const { timer } = useTimerContext();

  useQueryInputEffect();
  useTimerEffect();

  return (
    <>
      {Boolean(timer.duration) && (
        <div
          className={`${styles.block} ${lessThanMinute(timer.duration) && styles.single}`}
        >
          {!lessThanMinute(timer.duration) && (
            <>
              <span className={styles.minutes}>
                {padNumber(truncate(divideByMinute(timer.duration)))}
              </span>
              <span className={styles.separator}>:</span>
            </>
          )}

          <span className={styles.seconds}>
            {lessThanTenSec(timer.duration)
              ? moduloByMinute(timer.duration) / second
              : padNumber(moduloByMinute(timer.duration) / second)}
          </span>
        </div>
      )}

      {Boolean(timer.error) && <TimerAlert />}
    </>
  );
}

export default Timer;

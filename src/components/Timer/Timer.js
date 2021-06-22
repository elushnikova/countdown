import { useContext, useEffect } from "react";
import { second } from "./utils/preset";
import {
  subtractSecond,
  padNumber,
  truncate,
  divideByMinute,
  moduloByMinute,
  lessThanMinute,
} from "./utils/lib";
import styles from "./Timer.module.scss";
import TimerContext from "../../contexts/TimerContext";

function Timer() {
  const { ms, setMs } = useContext(TimerContext);

  useEffect(() => {
    if (!ms) return;

    const id = setTimeout(() => {
      setMs(subtractSecond);
    }, second);

    return () => {
      clearTimeout(id);
    };
  }, [ms, setMs]);

  return (
    <>
      {ms ? (
        <div
          className={`${styles.time} ${lessThanMinute(ms) && styles.single}`}
        >
          {!lessThanMinute(ms) && (
            <>
              <span className={styles.minutes}>
                {padNumber(truncate(divideByMinute(ms)))}
              </span>
              <span className={styles.separator}>:</span>
            </>
          )}
          <span className={styles.seconds}>
            {padNumber(moduloByMinute(ms) / second)}
          </span>
        </div>
      ) : (
        <div className={`${styles.time} ${styles.single} ${styles.over}`}>
          Перерыв окончен
        </div>
      )}
    </>
  );
}

export default Timer;

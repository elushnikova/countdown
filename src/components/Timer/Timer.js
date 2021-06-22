import { useContext, useEffect } from "react";
import { second } from "./utils/preset";
import {
  subtractSecond,
  padNumber,
  truncate,
  divideByMinute,
  moduloByMinute,
  lessThanMinute,
  lessThanTenSec,
} from "./utils/lib";
import styles from "./Timer.module.scss";
import TimerContext from "../../contexts/TimerContext";

function Timer() {
  const { time, setTime } = useContext(TimerContext);

  useEffect(() => {
    if (!time) return;

    const id = setTimeout(() => {
      setTime(subtractSecond);
    }, second);

    return () => {
      clearTimeout(id);
    };
  }, [time, setTime]);

  return (
    <>
      {Boolean(time) && (
        <div
          className={`${styles.time} ${lessThanMinute(time) && styles.single}`}
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
        // ) : (
        // <div className={`${styles.time} ${styles.single} ${styles.over}`}>
        //   Перерыв окончен
        // </div>
      )}
    </>
  );
}

export default Timer;

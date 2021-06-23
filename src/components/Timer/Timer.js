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
import classes from "./Timer.module.scss";
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
          className={`${classes.block} ${lessThanMinute(time) && classes.single}`}
        >
          {!lessThanMinute(time) && (
            <>
              <span className={classes.minutes}>
                {padNumber(truncate(divideByMinute(time)))}
              </span>
              <span className={classes.separator}>:</span>
            </>
          )}

          <span className={classes.seconds}>
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

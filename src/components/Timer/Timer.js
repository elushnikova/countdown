import { useContext, useEffect } from "react";
import unit from "../../utils/unit";
import {
  subtractSecond,
  padNumber,
  truncate,
  divideByMinute,
  moduloByMinute,
  lessThanMinute,
  lessThanTenSec,
} from "../../utils/timerLib";
import classes from "./Timer.module.scss";
import TimerContext from "../../contexts/TimerContext";

function Timer() {
  const { time, setTime } = useContext(TimerContext);

  useEffect(() => {
    if (!time) return;

    const id = setTimeout(() => {
      setTime(subtractSecond);
    }, unit.second);

    return () => {
      clearTimeout(id);
    };
  }, [time, setTime]);

  return (
    <>
      {Boolean(time) && (
        <div
          className={`${classes.block} ${
            lessThanMinute(time) && classes.single
          }`}
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
              ? moduloByMinute(time) / unit.second
              : padNumber(moduloByMinute(time) / unit.second)}
          </span>
        </div>
      )}
    </>
  );
}

export default Timer;

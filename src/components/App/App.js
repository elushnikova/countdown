import { useState } from "react";
import { useTransition } from "react-spring";
import Toggle from "../Toggle/Toggle";
import Settings from "../Settings/Settings";
import Timer from "../Timer/Timer";
import FinalSlide from "../FinalSlide";
import classes from "./App.module.scss";
import TimerContext from "../../contexts/TimerContext";
import unit from "../../utils/unit";

function App() {
  const [open, setOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState();
  const [time, setTime] = useState(10 * unit.minute);

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
    <TimerContext.Provider
      value={{
        time,
        setTime,
        open,
        setOpen,
        closeTimeout,
        setCloseTimeout,
        isInverted: !time,
      }}
    >
      <main className={classes.container}>
        <Toggle />
        <Timer />
        {timerTransitions(
          (props, item) => item && <FinalSlide style={props} />
        )}
        {settingsTransitions(
          (props, item) => item && <Settings style={props} />
        )}
      </main>
    </TimerContext.Provider>
  );
}

export default App;

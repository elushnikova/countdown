import { useState } from "react";
import { useTransition } from "react-spring";
import Toggle from "../Toggle/Toggle";
import Settings from "../Settings/Settings";
import Timer from "../Timer/Timer";
import TimeOver from "../TimeOver/TimeOver";
import classes from "./App.module.scss";
import TimerContext from "../../contexts/TimerContext";
import preset from "../Timer/utils/preset";

function App() {
  const [open, setOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState();
  const [time, setTime] = useState(preset.tenMin);

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
      value={{ time, setTime, open, setOpen, closeTimeout, setCloseTimeout }}
    >
      <main className={classes.container}>
        <Toggle isInverted={!time} />
        <Timer />
        {timerTransitions((props, item) => item && <TimeOver style={props} />)}
        {settingsTransitions(
          (props, item) => item && <Settings style={props} isInverted={!time} />
        )}
      </main>
    </TimerContext.Provider>
  );
}

export default App;

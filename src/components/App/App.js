import { useState } from "react";
import { useTransition } from "react-spring";
import Toggle from "../Toggle/Toggle";
import Settings from "../Settings/Settings";
import Timer from "../Timer/Timer";
import styles from "./App.module.scss";
import TimerContext from "../../contexts/TimerContext";
import preset from "../Timer/utils/preset";

function App() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(preset.tenMin);

  const transitions = useTransition(open, {
    from: { right: -320 },
    enter: { right: 0 },
    leave: { right: -320 },
    delay: 100,
    reverse: open,
  });

  return (
    <TimerContext.Provider value={{ time, setTime, open, setOpen }}>
      <main className={styles.container}>
        <Toggle />
        <Timer />
        {transitions((props, item) => item && <Settings style={props} />)}
      </main>
    </TimerContext.Provider>
  );
}

export default App;

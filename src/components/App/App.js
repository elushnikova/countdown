import { useState } from "react";
import { config, useTransition } from "react-spring";
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
    from: { opacity: 0, right: -200 },
    to: { opacity: 1, right: 0 },
    leave: { opacity: 0 },
    delay: 200,
    config: config.molasses,
  });

  return (
    <TimerContext.Provider value={{ time, setTime }}>
      <main className={styles.container}>
        <Toggle open={open} setOpen={setOpen} />
        <Timer />
        {transitions((styles, item) => item && <Settings style={styles} />)}
      </main>
    </TimerContext.Provider>
  );
}

export default App;

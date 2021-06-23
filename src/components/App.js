import { useState } from "react";
import { useTransition } from "react-spring";
import Toggle from "./Toggle/Toggle";
import Settings from "./Settings/Settings";
import Timer from "./Timer/Timer";
import FinalSlide from "./FinalSlide";
import TimerContext from "../contexts/TimerContext";
import unit from "../utils/unit";
import styled from "styled-components";
import color from "../utils/color";

const Container = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 1rem;

  color: ${color.accent};
  background-color: ${color.base};

  font-family: "Russo One", sans-serif;
`;

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
      <Container>
        <Toggle />
        <Timer />
        {timerTransitions(
          (props, item) => item && <FinalSlide style={props} />
        )}
        {settingsTransitions(
          (props, item) => item && <Settings style={props} />
        )}
      </Container>
    </TimerContext.Provider>
  );
}

export default App;

import { useContext } from "react";
import { animated } from "react-spring";
import TimerContext from "../../contexts/TimerContext";
import unit from "../../utils/unit";
import classes from "./Settings.module.scss";
import Overlay from "../Overlay";
import PresetList from "../PresetList";

function Settings({ style }) {
  const { setOpen, closeTimeout, setCloseTimeout, isInverted } =
    useContext(TimerContext);

  function handleSettingsClick(e) {
    e.stopPropagation();
    clearTimeout(closeTimeout);

    const timeoutId = setTimeout(() => {
      setOpen(false);
    }, 5 * unit.second);

    setCloseTimeout(timeoutId);
  }

  return (
    <Overlay onClick={() => setOpen(false)}>
      <animated.div
        className={`${classes.block} ${isInverted && classes.inverted}`}
        style={style}
        onClick={handleSettingsClick}
      >
        <PresetList />
      </animated.div>
    </Overlay>
  );
}

export default Settings;

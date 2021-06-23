import { useContext } from "react";
import { animated } from "react-spring";
import TimerContext from "../../contexts/TimerContext";
import Button from "../Button";
import preset, { second } from "../Timer/utils/preset";
import classes from "./Settings.module.scss";
import Overlay from "../Overlay";
import BaseList from "../BaseList";

function Settings({ style, isInverted }) {
  const { setOpen, closeTimeout, setCloseTimeout } = useContext(TimerContext);

  function handleSettingsClick(e) {
    e.stopPropagation();
    clearTimeout(closeTimeout);

    const timeoutId = setTimeout(() => {
      setOpen(false);
    }, 5 * second);

    setCloseTimeout(timeoutId);
  }

  return (
    <Overlay onClick={() => setOpen(false)}>
      <animated.div
        className={`${classes.block} ${isInverted && classes.inverted}`}
        style={style}
        onClick={handleSettingsClick}
      >
        <BaseList>
          <li>
            <Button isInverted={isInverted} time={preset.fiveSec}>
              5 сек
            </Button>
          </li>
          <li>
            <Button isInverted={isInverted} time={preset.tenSec}>
              10 сек
            </Button>
          </li>
          <li>
            <Button isInverted={isInverted} time={preset.oneMin}>
              1 мин
            </Button>
          </li>
          <li>
            <Button isInverted={isInverted} time={preset.fiveMin}>
              5 мин
            </Button>
          </li>
          <li>
            <Button isInverted={isInverted} time={preset.tenMin}>
              10 мин
            </Button>
          </li>
          <li>
            <Button isInverted={isInverted} time={preset.fifteenMin}>
              15 мин
            </Button>
          </li>
        </BaseList>
      </animated.div>
    </Overlay>
  );
}

export default Settings;

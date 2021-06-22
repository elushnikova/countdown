import { animated } from "react-spring";
import SettingsButton from "../SettingsButton/SettingsButton";
import preset from "../Timer/utils/preset";
import classes from "./Settings.module.scss";

function Settings({ style, isInverted }) {
  return (
    <animated.div
      className={`${classes.block} ${isInverted && classes.inverted}`}
      style={style}
    >
      <ul className={classes.list}>
        <li>
          <SettingsButton isInverted={isInverted} time={preset.fiveSec}>
            5 сек
          </SettingsButton>
        </li>
        <li>
          <SettingsButton isInverted={isInverted} time={preset.tenSec}>
            10 сек
          </SettingsButton>
        </li>
        <li>
          <SettingsButton isInverted={isInverted} time={preset.oneMin}>
            1 мин
          </SettingsButton>
        </li>
        <li>
          <SettingsButton isInverted={isInverted} time={preset.fiveMin}>
            5 мин
          </SettingsButton>
        </li>
        <li>
          <SettingsButton isInverted={isInverted} time={preset.tenMin}>
            10 мин
          </SettingsButton>
        </li>
        <li>
          <SettingsButton isInverted={isInverted} time={preset.fifteenMin}>
            15 мин
          </SettingsButton>
        </li>
      </ul>
    </animated.div>
  );
}

export default Settings;

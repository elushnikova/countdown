import { useContext } from "react";
import TimerContext from "../../contexts/TimerContext";
import classes from "./SettingsButton.module.scss";

function SettingsButton({ time, children, isInverted }) {
  const { setTime } = useContext(TimerContext);

  return (
    <button
      onClick={() => setTime(time)}
      className={`${classes.button} ${isInverted && classes.inverted}`}
    >
      {children}
    </button>
  );
}

export default SettingsButton;

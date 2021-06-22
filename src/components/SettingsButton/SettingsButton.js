import { useContext } from "react";
import TimerContext from "../../contexts/TimerContext";
import styles from "./SettingsButton.module.scss";

function SettingsButton({ time, children, isInverted }) {
  const { setTime } = useContext(TimerContext);

  return (
    <button
      onClick={() => setTime(time)}
      className={`${styles.button} ${isInverted && styles.inverted}`}
    >
      {children}
    </button>
  );
}

export default SettingsButton;

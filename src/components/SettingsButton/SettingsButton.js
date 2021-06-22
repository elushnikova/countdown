import { useContext } from "react";
import TimerContext from "../../contexts/TimerContext";
import styles from "./SettingsButton.module.scss";

function SettingsButton({ time, children }) {
  const { setTime } = useContext(TimerContext);

  return (
    <button onClick={() => setTime(time)} className={styles.button}>
      {children}
    </button>
  );
}

export default SettingsButton;

import { useContext } from "react";
import TimerContext from "../../contexts/TimerContext";
import styles from "./SettingsButton.module.scss";

function SettingsButton({ time, children }) {
  const { setMs } = useContext(TimerContext);

  return (
    <button onClick={() => setMs(time)} className={styles.button}>
      {children}
    </button>
  );
}

export default SettingsButton;

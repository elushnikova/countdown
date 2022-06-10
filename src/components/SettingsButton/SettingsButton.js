import useTimerContext from '../../hooks/useTimerContext';
import styles from './SettingsButton.module.scss';

function SettingsButton({ time, children, isInverted }) {
  const { setTime } = useTimerContext();

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

import useTimerContext from '../../hooks/useTimerContext';
import { second } from '../Timer/utils/presets';
import styles from './SettingsButton.module.scss';

function SettingsButton({ ms, children, isInverted }) {
  const { setTime } = useTimerContext();

  return (
    <button
      onClick={() => setTime(ms < second ? second : ms)}
      className={`${styles.button} ${isInverted && styles.inverted}`}
    >
      {children}
    </button>
  );
}

export default SettingsButton;

import useTimerContext from '../timer/useTimerContext';
import styles from './SettingsButton.module.scss';

function SettingsButton({ ms, children, isInverted }) {
  const { dispatch, action } = useTimerContext();

  return (
    <button
      onClick={() => dispatch(action.setDuration(ms))}
      className={`${styles.button} ${isInverted && styles.inverted}`}
    >
      {children}
    </button>
  );
}

export default SettingsButton;

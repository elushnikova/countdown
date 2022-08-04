import useTimerContext from '../timer/useTimerContext';
import styles from './SettingsButton.module.scss';

function SettingsButton({
  ms,
  children,
  isInverted,
  onClick,
}) {
  const { dispatch, action } = useTimerContext();
  const setDuration = () => dispatch(action.setDuration(ms));

  return (
    <button
      onClick={
        (ms && !onClick)
          ? setDuration
          : onClick
      }
      className={`${styles.button} ${isInverted && styles.inverted}`}
    >
      {children}
    </button>
  );
}

export default SettingsButton;

import useTimerContext from '../timer/useTimerContext';
import styles from './SettingsButton.module.scss';

function SettingsButton({ ms, children, onClick }) {
  const { dispatch, action, isInverted } = useTimerContext();
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

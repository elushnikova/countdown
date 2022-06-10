import { animated } from 'react-spring';
import useSettingsContext from '../../hooks/useSettingsContext';
import SettingsButton from '../SettingsButton/SettingsButton';
import preset, { second } from '../Timer/utils/preset';
import classes from './Settings.module.scss';

function Settings({ style, isInverted }) {
  const { setOpen, timeoutId, setTimeoutId } = useSettingsContext();

  function handleSettingsClick(e) {
    e.stopPropagation();
    clearTimeout(timeoutId);

    const id = setTimeout(() => {
      setOpen(false);
    }, 5 * second);

    setTimeoutId(id);
  }

  return (
    <div className={classes.overlay} onClick={() => setOpen(false)}>
      <animated.div
        className={`${classes.block} ${isInverted && classes.inverted}`}
        style={style}
        onClick={handleSettingsClick}
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
    </div>
  );
}

export default Settings;

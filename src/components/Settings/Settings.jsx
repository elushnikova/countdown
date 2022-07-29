import { animated } from 'react-spring';
import useSidebarContext from '../../hooks/useSidebarContext';
import SettingsButton from '../SettingsButton/SettingsButton.jsx';
import presets, { second } from '../Timer/utils/presets';
import classes from './Settings.module.scss';

function Settings({ style, isInverted }) {
  const { setOpen, timeoutId, setTimeoutId } = useSidebarContext();

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
          {
            presets.map((preset) => (
              <li key={preset.title}>
                <SettingsButton isInverted={isInverted} time={preset.duration}>
                  {preset.title}
                </SettingsButton>
              </li>
            ))
          }
        </ul>
      </animated.div>
    </div>
  );
}

export default Settings;

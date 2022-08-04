import { useMemo } from 'react';
import { animated } from 'react-spring';
import useConfigContext from '../config/useConfigContext';
import useLocalStorage from '../presets/useLocalStorage';
import useSidebarContext from './useSidebarContext';
import SettingsButton from './SettingsButton.jsx';
import initialPresets, { second } from '../timer/utils/presets';
import classes from './Settings.module.scss';

function Settings({ style, isInverted }) {
  const { showExport } = useConfigContext();
  const { setOpen, timeoutId, setTimeoutId } = useSidebarContext();
  const mapMsPresetsToSeconds = () => initialPresets.map((preset) => ({
    ...preset,
    duration: preset.duration / second,
  }));
  const presetsSeconds = useMemo(mapMsPresetsToSeconds, []);
  const [presets] = useLocalStorage('presets', presetsSeconds);

  function handleSettingsClick(e) {
    e.stopPropagation();
    clearTimeout(timeoutId);

    const id = setTimeout(() => {
      setOpen(false);
    }, 5 * second);

    setTimeoutId(id);
  }

  const exportPresets = async () => {
    if (showExport) {
      const a = document.createElement('a');
      const content = JSON.stringify(presetsSeconds, null, 2);
      const file = new Blob([content], { type: 'application/json' });
      const timestamp = new Date()
        .toISOString() // '2022-08-04T16:28:26.248Z'
        .replace(/[:-]/g, '') // '20220804T162826.248Z'
        .replace(/\..+$/, ''); // '20220804T162826'

      a.href = URL.createObjectURL(file);
      a.download = `have-a-break--export--${timestamp}.json`;
      a.click();

      URL.revokeObjectURL(a.href);
    }
  };

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
                <SettingsButton
                  isInverted={isInverted}
                  ms={preset.duration * second}
                >
                  {preset.title}
                </SettingsButton>
              </li>
            ))
          }
          {
            showExport && (
              <li>
                <SettingsButton
                  isInverted={isInverted}
                  onClick={exportPresets}
                >
                  Экспорт
                </SettingsButton>
              </li>
            )
          }
        </ul>
      </animated.div>
    </div>
  );
}

export default Settings;

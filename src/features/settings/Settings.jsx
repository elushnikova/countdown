import { useMemo } from 'react';
import { animated } from 'react-spring';
import useConfigContext from '../config/useConfigContext';
import useLocalStorage from '../presets/useLocalStorage';
import useSidebarContext from './useSidebarContext';
import useTimerContext from '../timer/useTimerContext';
import SettingsButton from './SettingsButton.jsx';
import ExportButton from '../export/ExportButton.jsx';
import initialPresets, { second } from '../timer/utils/presets';
import classes from './Settings.module.scss';

function Settings({ style }) {
  const { isInverted } = useTimerContext();
  const { showExport } = useConfigContext();
  const { closeSidebar } = useSidebarContext();
  const mapMsPresetsToSeconds = () => initialPresets.map((preset) => ({
    ...preset,
    duration: preset.duration / second,
  }));
  const presetsSeconds = useMemo(mapMsPresetsToSeconds, []);
  const [presets] = useLocalStorage('presets', presetsSeconds);

  const stopClickPropagation = (event) => event.stopPropagation();

  return (
    <div
      className={classes.overlay}
      onClick={closeSidebar}
    >
      <animated.div
        className={`${classes.block} ${isInverted && classes.inverted}`}
        onClick={stopClickPropagation}
        style={style}
      >
        <ul className={classes.list}>
          {
            presets.map((preset) => (
              <li key={preset.title}>
                <SettingsButton ms={preset.duration * second}>
                  {preset.title}
                </SettingsButton>
              </li>
            ))
          }
          { showExport && (<li><ExportButton /></li>) }
        </ul>
      </animated.div>
    </div>
  );
}

export default Settings;

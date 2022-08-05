import useConfigContext from '../config/useConfigContext';
import useTimerContext from '../timer/useTimerContext';
import useLocalStorage from '../presets/useLocalStorage';
import SettingsButton from '../settings/SettingsButton.jsx';

function ExportButton() {
  const { showExport } = useConfigContext();
  const { timer } = useTimerContext();
  const [presets] = useLocalStorage('presets');

  const exportPresets = async () => {
    if (showExport) {
      const a = document.createElement('a');
      const content = JSON.stringify(presets, null, 2);
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
    <SettingsButton
      isInverted={!timer.duration}
      onClick={exportPresets}
    >
      Экспорт
    </SettingsButton>
  );
}

export default ExportButton;

import { useEffect, useState, useRef } from 'react';
import useLocalStorage from '../presets/useLocalStorage';
import useSidebarContext from '../settings/useSidebarContext';
import useTimerContext from '../timer/useTimerContext';
import styles from './ImportForm.module.scss';

function ImportForm() {
  const [timeoutId, setTimeoutId] = useState(null);
  const { isInverted } = useTimerContext();
  const [, setPresets] = useLocalStorage('presets');
  const { closeSidebar, openSidebar } = useSidebarContext();
  const [feedback, setFeedback] = useState(null);
  const fileInput = useRef(null);
  const validateFields = (preset) => {
    const titleError = 'Добавь название (title) для каждого таймера';
    if (!preset.title) throw new Error(titleError);
    if (typeof preset.title !== 'string') throw new Error(titleError);

    const durationError = 'Добавь длительность в мс (duration) для каждого таймера';
    if (!preset.duration) throw new Error(durationError);
    if (typeof preset.duration !== 'number') throw new Error(durationError);
    if (preset.duration < 1) throw new Error(durationError);
  };

  const importFile = async (event) => {
    event.preventDefault();
    setFeedback(null);

    const [file] = fileInput.current.files;
    let presets;

    try {
      const importData = await file.text();
      presets = JSON.parse(importData);
    } catch {
      setFeedback('Нажми "Экспорт", чтобы получить образец JSON-файла');
      return;
    }

    if (!Array.isArray(presets)) {
      setFeedback('Нажми "Экспорт", чтобы получить образец JSON-файла');
      return;
    }

    try {
      presets.forEach(validateFields);
    } catch ({ message }) {
      setFeedback(message);
      return;
    }

    setPresets(presets);
    setFeedback('Создаю таймеры...');
    closeSidebar();
    setTimeoutId(setTimeout(openSidebar, 1000));
  };

  useEffect(() => () => clearTimeout(timeoutId), [timeoutId]);

  return (
    <form
      className={`${styles.import} ${isInverted && styles.inverted}`}
      onSubmit={importFile}
    >
      <label>
        <h6>JSON импорт</h6>
        <input type="file" ref={fileInput} />
      </label>
      <button type="submit">Импортировать</button>

      {/* FIXME: Render conditionally but avoid jumping via CSS */}
      <output>{feedback} &nbsp;</output>
    </form>
  );
}

export default ImportForm;

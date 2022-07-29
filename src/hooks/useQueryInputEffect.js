import { useEffect } from 'react';
import { preset, second } from '../components/Timer/utils/presets';
import useConfigContext from './useConfigContext';
import useTimerContext from './useTimerContext';

const useQueryInputEffect = () => {
  const { dispatch, action } = useTimerContext();
  const { queryKeySeconds, replaceHistoryEntry } = useConfigContext();

  const getQuerySeconds = () => {
    const queryString = new URLSearchParams(document.location.search);
    const querySeconds = queryString.get(queryKeySeconds);

    if (!querySeconds) {
      return;
    }

    const seconds = parseInt(querySeconds, 10);
    const duration = seconds * second;

    dispatch(action.setTime(duration));

    if (replaceHistoryEntry) {
      window.history.replaceState(null, '', document.location.origin);
    }

    const lessThanMinimum = duration < preset.minimum;
    const moreThanMaximum = duration > preset.maximum;

    if (lessThanMinimum) {
      window.location.assign(`/?s=${preset.default / second}`);
      return;
    }

    if (moreThanMaximum) {
      window.location.assign(`/?s=${preset.maximum / second}`);
    }
  };

  useEffect(getQuerySeconds, [
    action,
    dispatch,
    queryKeySeconds,
    replaceHistoryEntry,
  ]);
};

export default useQueryInputEffect;

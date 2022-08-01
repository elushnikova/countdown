import { useEffect } from 'react';
import { preset, second } from '../timer/utils/presets';
import useConfigContext from '../config/useConfigContext';
import useTimerContext from '../timer/useTimerContext';

const useQueryInputEffect = () => {
  const {
    dispatch, action, lessThanMinimum, moreThanMaximum,
  } = useTimerContext();
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

    if (lessThanMinimum(duration)) {
      window.location.assign(`/?s=${preset.default / second}`);
      return;
    }

    if (moreThanMaximum(duration)) {
      window.location.assign(`/?s=${preset.maximum / second}`);
    }
  };

  useEffect(getQuerySeconds, [
    action,
    dispatch,
    queryKeySeconds,
    replaceHistoryEntry,
    lessThanMinimum,
    moreThanMaximum,
  ]);
};

export default useQueryInputEffect;

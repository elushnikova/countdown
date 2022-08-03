import { useEffect } from 'react';
import { second } from '../timer/utils/presets';
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

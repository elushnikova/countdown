import { useEffect } from 'react';
import { minute, second } from '../timer/utils/presets';
import useConfigContext from '../config/useConfigContext';
import useTimerContext from '../timer/useTimerContext';

const useQueryInputEffect = () => {
  const { action, dispatch } = useTimerContext();
  const { queryKeyMinutes, queryKeySeconds, replaceHistoryEntry } = useConfigContext();

  const getQuerySeconds = () => {
    const queryString = new URLSearchParams(document.location.search);
    const queryMinutes = queryString.get(queryKeyMinutes);
    const querySeconds = queryString.get(queryKeySeconds);
    const noQueryInput = !queryMinutes && !querySeconds;

    if (noQueryInput) return;

    const minutes = parseInt(queryMinutes, 10) || 0;
    const seconds = parseInt(querySeconds, 10) || 0;
    const duration = (minutes * minute) + (seconds * second);

    dispatch(action.setDuration(duration));

    if (replaceHistoryEntry) {
      window.history.replaceState(null, '', document.location.origin);
    }
  };

  useEffect(getQuerySeconds, [
    action,
    dispatch,
    queryKeyMinutes,
    queryKeySeconds,
    replaceHistoryEntry,
  ]);
};

export default useQueryInputEffect;

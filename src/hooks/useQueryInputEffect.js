import { useEffect } from 'react';
import { second } from '../components/Timer/utils/presets';
import useConfigContext from './useConfigContext';
import useTimerContext from './useTimerContext';

const useQueryInputEffect = () => {
  const { dispatch, action } = useTimerContext();
  const { maxMinutes, queryKeySeconds, replaceHistoryEntry } = useConfigContext();

  const getQuerySeconds = () => {
    const queryString = new URLSearchParams(document.location.search);
    const querySeconds = queryString.get(queryKeySeconds);

    if (!querySeconds) {
      return;
    }

    let numberOfSeconds = parseInt(querySeconds, 10);
    if (numberOfSeconds > maxMinutes * 60) {
      numberOfSeconds = maxMinutes * 60;
    }

    if (replaceHistoryEntry) {
      window.history.replaceState(null, '', document.location.origin);
    }

    dispatch(action.setTime(numberOfSeconds * second));
  };

  useEffect(getQuerySeconds, [
    action,
    dispatch,
    maxMinutes,
    queryKeySeconds,
    replaceHistoryEntry,
  ]);
};

export default useQueryInputEffect;

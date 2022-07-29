import { useEffect } from 'react';
import { second } from '../components/Timer/utils/presets';
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

    const numberOfSeconds = parseInt(querySeconds, 10);

    dispatch(action.setTime(numberOfSeconds * second));

    if (replaceHistoryEntry) {
      window.history.replaceState(null, '', document.location.origin);
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

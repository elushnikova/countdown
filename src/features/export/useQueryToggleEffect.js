import { useEffect } from 'react';
import useConfigContext from '../config/useConfigContext';

const useQueryToggleEffect = () => {
  const {
    queryKeyExport,
    setShowExport,
  } = useConfigContext();

  const getQueryExport = () => {
    const queryString = new URLSearchParams(document.location.search);
    const queryExport = queryString.has(queryKeyExport);

    if (queryExport) {
      setShowExport(true);
    }
  };

  useEffect(getQueryExport, [queryKeyExport, setShowExport]);
};

export default useQueryToggleEffect;

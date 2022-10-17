import { createContext, useContext, useState } from 'react';

const ConfigContext = createContext();

const ConfigProvider = ({ children }) => {
  // Key to get amount of seconds from URL query
  const [queryKeySeconds] = useState('s');

  // Key to turn on JSON export/import via URL query
  const [queryKeyExport] = useState('export');
  const [showExport, setShowExport] = useState(false);

  // Enable to remove URL query after passing amount of seconds
  const [replaceHistoryEntry] = useState(false);

  return (
    <ConfigContext.Provider value={{
      queryKeySeconds,
      replaceHistoryEntry,
      queryKeyExport,
      showExport,
      setShowExport,
    }}>
      {children}
    </ConfigContext.Provider>
  );
};

const useConfigContext = () => useContext(ConfigContext);

export default useConfigContext;
export { ConfigProvider };

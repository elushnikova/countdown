import { createContext, useContext, useState } from 'react';

const ConfigContext = createContext();

const ConfigProvider = ({ children }) => {
  // Key to get amount of seconds from URL query
  const [queryKeySeconds] = useState('s');

  // Enable to remove URL query after passing amount of seconds
  const [replaceHistoryEntry] = useState(false);

  const [showExport] = useState(false);

  return (
    <ConfigContext.Provider value={{
      queryKeySeconds,
      replaceHistoryEntry,
      showExport,
    }}>
      {children}
    </ConfigContext.Provider>
  );
};

const useConfigContext = () => useContext(ConfigContext);

export default useConfigContext;
export { ConfigProvider };

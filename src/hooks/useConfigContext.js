import { createContext, useContext, useState } from 'react';

const ConfigContext = createContext();

const ConfigProvider = ({ children }) => {
  // Upper limit for minutes — no use to schedule break or focus session for longer than that
  const [maxMinutes] = useState(45);

  // Key to get amount of seconds from URL query
  const [queryKeySeconds] = useState('s');

  // Enable to remove URL query after passing amount of seconds
  const [replaceHistoryEntry] = useState(false);

  return (
    <ConfigContext.Provider value={{
      maxMinutes,
      queryKeySeconds,
      replaceHistoryEntry,
    }}>
      {children}
    </ConfigContext.Provider>
  );
};

const useConfigContext = () => useContext(ConfigContext);

export default useConfigContext;
export { ConfigProvider };

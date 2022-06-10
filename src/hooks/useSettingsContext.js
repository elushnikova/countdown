import { useContext, useState, createContext } from 'react';

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  return (
    <SettingsContext.Provider value={{
      open,
      setOpen,
      timeoutId,
      setTimeoutId,
    }}>
      {children}
    </SettingsContext.Provider>
  );
};

const useSettingsContext = () => useContext(SettingsContext);

export default useSettingsContext;
export { SettingsProvider };
